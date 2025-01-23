import { URLS } from "@/constants/url";

export const NAVIGATION_MENUS = (isAuthenticated: boolean) => [
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
    href: isAuthenticated ? URLS.myPage : URLS.signIn,
    icon: "profile",
    clickedIcon: "profile_fill",
    text: "마이",
  },
];
