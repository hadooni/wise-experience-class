"use client";
import AuthButton from "@/components/auth/AuthButton";
import SignInput from "@/components/auth/SignInput";
import SocialLogIn from "@/components/auth/SocialLogIn";
import BackButton from "@/components/common/BackButton";
import { URLS } from "@/constants/url";
import { useAuth } from "@/hooks/useAuth";
import { signInSchema } from "@/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useRouter();

  const { onSignInHandler } = useAuth();

  const navigateToSignUp = () => {
    navigate.push(URLS.signUp);
  };

  return (
    <div className="h-screen bg-sign-in-gradient w-full">
      <BackButton />
      <Image
        src={"/images/logo.svg"}
        alt="logo"
        width={160}
        height={70}
        className="fixed top-24 left-11"
      />
      <form
        onSubmit={handleSubmit(onSignInHandler)}
        className="pt-[30vh] flex flex-col gap-6"
      >
        <SignInput
          type="text"
          name="email"
          register={register}
          error={errors.email?.message}
          placeholder="이메일"
        />
        <SignInput
          type="password"
          register={register}
          name="password"
          error={errors.password?.message}
          placeholder="비밀번호"
        />
        <div className="flex flex-col gap-2 mt-4">
          <AuthButton type="submit" color="navy" text="로그인" />
          <AuthButton
            onClick={navigateToSignUp}
            type="button"
            color="navyLight"
            text="계정 만들기"
          />
        </div>
      </form>
      <SocialLogIn />
    </div>
  );
};

export default page;
