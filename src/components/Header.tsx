import { URLS } from "@/constants/url";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="h-16 w-full border-b fixed flex justify-center items-center bg-white z-10">
      <Image
        src={"/icons/menu.svg"}
        alt="menu"
        width={30}
        height={30}
        className="fixed left-6 cursor-pointer"
      />
      <Link href={URLS.home}>
        <Image src={"/images/logo.svg"} alt="logo" width={80} height={35} />
      </Link>
    </div>
  );
};
export default Header;
