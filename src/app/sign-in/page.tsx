import BackButton from "@/components/common/BackButton";
import Image from "next/image";
import SignInForm from "@/components/auth/SignInForm";
import SocialLogIn from "@/components/auth/SocialLogIn";

const page = () => {
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
      <SignInForm />
      <SocialLogIn />
    </div>
  );
};

export default page;
