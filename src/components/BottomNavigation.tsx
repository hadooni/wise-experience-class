"use client";
import { usePathname } from "next/navigation";
import MenuItem from "./MenuItem";
import { HIDDEN_PATHS } from "@/constants/url";
import { useSession } from "next-auth/react";
import { NAVIGATION_MENUS } from "@/constants/navigation";

const BottomNavigation = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const menus = NAVIGATION_MENUS(!!session);

  if (HIDDEN_PATHS.hiddenNavigation.includes(pathname)) {
    return null;
  }

  return (
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
