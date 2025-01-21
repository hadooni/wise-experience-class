"use client";
import { usePathname } from "next/navigation";
import MenuItem from "./MenuItem";
import { HIDDEN_PATHS, URLS } from "@/constants/url";

const menus = [
  {
    href: URLS.home,
    icon: "home",
    clickedIcon: "home_fill",
    text: "홈",
  },
  {
    href: URLS.search,
    icon: "search",
    clickedIcon: "search_fill",
    text: "검색",
  },
  {
    href: URLS.applyList,
    icon: "list",
    clickedIcon: "list_fill",
    text: "신청",
  },
  {
    href: URLS.myPage,
    icon: "profile",
    clickedIcon: "profile_fill",
    text: "마이",
  },
];

const BottomNavigation = () => {
  const pathname = usePathname();

  const shouldHideNavigation = () => {
    return HIDDEN_PATHS.hiddenNavigation.includes(pathname);
  };

  return shouldHideNavigation() ? null : (
    <section className="fixed bottom-0 h-20 w-full border-t bg-white">
      <ul className="flex justify-around items-center h-full">
        {menus.map((menu) => (
          <MenuItem
            key={menu.href}
            {...menu}
            isActive={pathname === menu.href}
          />
        ))}
      </ul>
    </section>
  );
};

export default BottomNavigation;
