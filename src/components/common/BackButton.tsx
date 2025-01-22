"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Image
      onClick={handleGoBack}
      src={"/icons/arrow_back.svg"}
      alt="back"
      width={24}
      height={24}
      className="fixed left-5 top-5"
    />
  );
};

export default BackButton;
