import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get("next-auth.session-token");
  const isAuthenticated = !!sessionCookie;
  const pathname = request.nextUrl.pathname;

  // 인증 유저 로그인/회원가입 접근
  if (isAuthenticated) {
    if (pathname === "/sign-in" || pathname === "/sign-up") {
      return NextResponse.redirect(new URL("/my-page", request.url));
    }
  }

  // 미인증 유저 마이페이지 접근
  if (!isAuthenticated) {
    if (pathname === "/my-page") {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/sign-in", "/sign-up", "/my-page"],
};
