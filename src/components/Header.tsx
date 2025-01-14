import Image from "next/image";

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
      <p>로고</p>
    </div>
  );
};

export default Header;
