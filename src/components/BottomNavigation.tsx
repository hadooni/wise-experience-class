"use client";
import { usePathname } from "next/navigation";
import MenuItem from "./MenuItem";

const menus = [
  {
    href: "/",
    icon: "home",
    clickedIcon: "home_fill",
    text: "홈",
  },
  {
    href: "/search",
    icon: "search",
    clickedIcon: "search_fill",
    text: "검색",
  },
  {
    href: "/apply-list",
    icon: "list",
    clickedIcon: "list_fill",
    text: "신청",
  },
  {
    href: "/my-page",
    icon: "profile",
    clickedIcon: "profile_fill",
    text: "마이",
  },
];

const BottomNavigation = () => {
  const pathName = usePathname();

  return (
    <section className="fixed bottom-0 h-20 w-full border-t bg-white">
      <ul className="flex justify-around items-center h-full">
        {menus.map((menu) => (
          <MenuItem
            key={menu.href}
            {...menu}
            isActive={pathName === menu.href}
          />
        ))}
      </ul>
    </section>
  );
};

export default BottomNavigation;
