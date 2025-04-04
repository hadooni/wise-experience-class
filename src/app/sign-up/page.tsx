import BackButton from "@/components/common/BackButton";
import SignUpForm from "@/components/auth/SignUpForm";
import Image from "next/image";

const page = () => {
  return (
    <div className="h-screen bg-sign-up-gradient w-full">
      <header className="flex justify-center z-10 items-center h-16">
        <BackButton />
        <span className="fixed font-bold text-[#515151]">회원가입</span>
      </header>
      <SignUpForm />
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
