"use client";
import { URLS } from "@/constants/url";
import browserClient from "@/lib/supabase/browser";
import { authenticateUser, createUserAccount } from "@/server/actions/auth";
import { useAuthStore } from "@/store/useAuthStore";
import { SignInTypes, SignUpTypes } from "@/types/auth";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const navigate = useRouter();
  const { setIsAuthenticated } = useAuthStore();

  // 회원가입
  const onSignUpHandler = async (data: SignUpTypes) => {
    const { data: authData, error } = await createUserAccount(data);
    if (error?.message === "User already registered") {
      console.log(error);
      alert("이미 존재하는 계정입니다.");
      return;
    }
    if (!authData.user) {
      alert("회원가입에 실패했습니다.");
      return;
    }
    navigate.replace(URLS.signIn);
  };

  // 로그인
  const onSignInHandler = async (data: SignInTypes) => {
    const { data: authData, error } = await authenticateUser(data);

    if (error?.message === "Invalid login credentials") {
      alert("계정이 존재하지 않거나 비밀번호가 일치하지 않습니다.");
      console.log(error);
      return;
    }
    if (!authData) {
      alert("로그인에 실패했습니다.");
    } else {
      if (authData.user) {
        setIsAuthenticated(!!authData.session);
      }
      navigate.replace(URLS.home);
    }
  };

  // 구글 로그인
  const signInWithGoogle = async () => {
    const { data, error } = await browserClient.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      console.error("로그인 에러", error);
    }
    if (data) {
      setIsAuthenticated(true);
    }
  };

  // 카카오 로그인
  const signInWithKakao = async () => {
    const { data, error } = await browserClient.auth.signInWithOAuth({
      provider: "kakao",
    });
    if (error) {
      console.error("로그인 에러", error);
    }
    if (data) {
      setIsAuthenticated(true);
    }
  };

  // 로그아웃
  const onSignOutHandler = async () => {
    const { error } = await browserClient.auth.signOut();
    setIsAuthenticated(false);
    navigate.replace(URLS.home);
  };

  return {
    onSignUpHandler,
    onSignInHandler,
    signInWithGoogle,
    signInWithKakao,
    onSignOutHandler,
  };
};
