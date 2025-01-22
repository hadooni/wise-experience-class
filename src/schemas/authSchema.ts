import { z } from "zod";

export const authSchema = z.object({
  email: z.string().email("이메일 형식이 올바르지 않습니다."),
  password: z
    .string()
    .min(8, "비밀번호는 최소 8자 이상이어야 합니다.")
    .regex(/[A-Za-z]/, "영문을 포함해야 합니다")
    .regex(/[0-9]/, "숫자를 포함해야 합니다")
    .regex(/[!*^_@]/, "특수문자(!*^_@)를 포함해야 합니다"),
  checkPassword: z.string(),
  nickname: z
    .string()
    .trim()
    .min(2, "닉네임은 최소 2자 이상이어야 합니다")
    .max(8, "닉네임은 최대 8자까지 가능합니다")
    .regex(
      /^[가-힣a-zA-Z0-9]+$/,
      "닉네임은 한글, 영문, 숫자만 사용 가능합니다"
    ),
});

export const signInSchema = authSchema.pick({
  email: true,
  password: true,
});

export const signUpSchema = authSchema.refine(
  (data) => data.password === data.checkPassword,
  {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["checkPassword"],
  }
);
