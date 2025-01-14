"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const UpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="cursor-pointer rounded-full bg-navy-custom p-2 fixed bottom-24 right-4"
    >
      <Image src={"/icons/arrow_up.svg"} alt="up" width={24} height={24} />
    </button>
  ) : null;
};

export default UpButton;
