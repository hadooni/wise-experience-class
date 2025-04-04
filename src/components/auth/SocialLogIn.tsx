"use client";
import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";

const SocialLogIn = () => {
  const { signInWithGoogle, signInWithKakao } = useAuth();
  return (
    <section>
      <div className="flex items-center justify-center mt-6 gap-3">
        <hr className="w-20 bg-[#B7B7B7]" />
        <span className="text-[#B7B7B7] font-bold text-sm">
          SNS 계정으로 가입하기
        </span>
        <hr className="w-20 bg-[#B7B7B7]" />
      </div>
      <div className="flex gap-4 justify-center m-4">
        <button
          onClick={signInWithKakao}
          className="bg-white rounded-full w-14 h-14 flex justify-center items-center"
        >
          <Image src={"/images/kakao.svg"} alt="kakao" width={36} height={36} />
        </button>
        <button
          onClick={signInWithGoogle}
          className="bg-white rounded-full w-14 h-14 flex justify-center items-center"
        >
          <Image
            src={"/images/google.svg"}
            alt="google"
            width={36}
            height={36}
          />
        </button>
      </div>
    </section>
  );
};

export default SocialLogIn;
