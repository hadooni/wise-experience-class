"use client";
import { HIDDEN_PATHS, URLS } from "@/constants/url";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  if (HIDDEN_PATHS.hiddenHeader.includes(pathname)) {
    return null;
  }

  return (
    <div className="h-16 w-full border-b fixed flex justify-center items-center bg-white z-10">
      <Link href={URLS.home}>
        <Image src={"/images/logo.svg"} alt="logo" width={80} height={35} />
      </Link>
    </div>
  );
};
export default Header;
