"use server";

import { createClient } from "@/lib/supabase/server";
import { SignInTypes, SignUpTypes } from "@/types/auth";

// 회원가입
export const createUserAccount = async (data: SignUpTypes) => {
  const supabase = await createClient();
  return await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: {
        nickname: data.nickname,
      },
    },
  });
};

// 로그인
export const authenticateUser = async (data: SignInTypes) => {
  const supabase = await createClient();
  return await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });
};
