import Image from "next/image";
import Link from "next/link";
import React from "react";

type MenuItemProps = {
  href: string;
  icon: string;
  clickedIcon: string;
  text: string;
  isActive: boolean;
};

const MenuItem = ({
  href,
  icon,
  clickedIcon,
  text,
  isActive,
}: MenuItemProps) => {
  return (
    <li>
      <Link href={href}>
        <div className="flex flex-col items-center">
          <Image
            src={`/icons/${isActive ? clickedIcon : icon}.svg`}
            width={35}
            height={35}
            alt={text}
          />
          <span
            className={`text-xs ${
              isActive ? "text-[#296CAD]" : "text-[#B7B7B7]"
            }`}
          >
            {text}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default MenuItem;
