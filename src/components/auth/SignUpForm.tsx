"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SignInput from "./SignInput";
import AuthButton from "./AuthButton";
import { useAuth } from "@/hooks/useAuth";
import { signUpSchema } from "@/schemas/authSchema";

const SignUpForm = () => {
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
  );
};

export default SignUpForm;
