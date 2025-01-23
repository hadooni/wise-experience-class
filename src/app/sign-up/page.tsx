"use client";
import BackButton from "@/components/common/BackButton";
import SignInput from "@/components/auth/SignInput";
import { signUpSchema } from "@/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import AuthButton from "@/components/auth/AuthButton";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      checkPassword: "",
      nickname: "",
    },
  });

  const { onSignUpHandler } = useAuth();

  return (
    <div className="h-screen bg-sign-up-gradient w-full">
      <header className="flex justify-center z-10 items-center h-16">
        <BackButton />
        <span className="fixed font-bold text-[#515151]">회원가입</span>
      </header>
      <form
        onSubmit={handleSubmit(onSignUpHandler)}
        className="flex flex-col gap-8 mt-20"
      >
        <SignInput
          label="이메일"
          type="text"
          register={register}
          name="email"
          error={errors.email?.message}
          placeholder="이메일 주소를 입력해주세요"
        />
        <SignInput
          label="비밀번호"
          type="password"
          register={register}
          name="password"
          error={errors.password?.message}
          placeholder="비밀번호를 입력해주세요"
        />
        <SignInput
          label="비밀번호 확인"
          type="password"
          register={register}
          name="checkPassword"
          error={errors.checkPassword?.message}
          placeholder="비밀번호를 한번 더 입력해주세요"
        />
        <SignInput
          label="닉네임"
          type="text"
          register={register}
          name="nickname"
          error={errors.nickname?.message}
          placeholder="사용하실 닉네임을 입력해주세요"
        />
        <AuthButton type="submit" color="navy" text="가입하기" />
      </form>
      <Image
        src={"/images/logo.svg"}
        alt="logo"
        width={80}
        height={40}
        className="fixed bottom-5 left-1/2 -translate-x-1/2"
      />
    </div>
  );
};

export default page;
