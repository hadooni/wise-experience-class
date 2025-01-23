"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import SignInput from "./SignInput";
import AuthButton from "./AuthButton";
import { URLS } from "@/constants/url";
import { signInSchema } from "@/schemas/authSchema";
import { useAuth } from "@/hooks/useAuth";

const SignInForm = () => {
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
  );
};

export default SignInForm;
