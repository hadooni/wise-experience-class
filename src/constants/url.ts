export const URLS = {
  home: "/",
  signIn: "/sign-in",
  signUp: "/sign-up",
  search: "/search",
  myPage: "/my-page",
  detail: "/detail",
  create: "/create-class",
  applyList: "/apply-list",
};

export const HIDDEN_PATHS = {
  hiddenHeader: [URLS.signIn, URLS.signUp],
  hiddenNavigation: [URLS.signIn, URLS.signUp, URLS.create],
};
