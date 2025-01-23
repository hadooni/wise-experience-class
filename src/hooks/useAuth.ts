import { URLS } from "@/constants/url";
import browserClient from "@/lib/supabase/browser";
import { useAuthStore } from "@/store/useAuthStore";
import { SignInTypes, SignUpTypes } from "@/types/auth";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const navigate = useRouter();
  const { setIsAuthenticated, setNickname } = useAuthStore();

  // 회원가입
  const onSignUpHandler = async (data: SignUpTypes) => {
    const { data: authData, error } = await browserClient.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          nickname: data.nickname,
        },
      },
    });
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
    const { data: authData, error } =
      await browserClient.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

    if (error?.message === "Invalid login credentials") {
      alert("계정이 존재하지 않거나 비밀번호가 일치하지 않습니다.");
      console.log(error);
      return;
    }
    if (!authData) {
      alert("로그인에 실패했습니다.");
    } else {
      if (authData.user) {
        console.log(authData);
        setIsAuthenticated(!!authData.session);
        setNickname(authData.user.user_metadata?.nickname);
      }
      navigate.replace(URLS.home);
    }
  };

  return { onSignUpHandler, onSignInHandler };
};
