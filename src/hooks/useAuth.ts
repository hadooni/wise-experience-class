"use client";
import { URLS } from "@/constants/url";
import { register } from "@/actions/register";
import { signIn, signOut } from "next-auth/react";
import { SignInTypes, SignUpTypes } from "@/types/auth";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const navigate = useRouter();

  // 회원가입
  const onSignUpHandler = async (data: SignUpTypes) => {
    const result = await register(data);
    if (result?.error) {
      alert("회원가입에 실패했습니다.");
      return;
    } else {
      return navigate.push(URLS.signIn);
    }
  };

  // 로그인
  const onSignInHandler = async (data: SignInTypes) => {
    await signIn("credentials", data);
  };

  // 로그아웃
  const onSignOutHandler = async () => {
    await signOut({ redirect: false }).then(() => {
      navigate.replace(URLS.home);
    });
  };

  // 구글 로그인
  const signInWithGoogle = async () => {
    await signIn("google");
  };

  // 카카오 로그인
  const signInWithKakao = async () => {
    await signIn("kakao");
  };

  return {
    onSignUpHandler,
    onSignInHandler,
    signInWithGoogle,
    signInWithKakao,
    onSignOutHandler,
  };
};
