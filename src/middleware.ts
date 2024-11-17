import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

export default createMiddleware(routing);

export const config = {
  matcher: ["/(vi|en)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  if (url.pathname.includes("/blog") && !url.pathname.startsWith("/vi")) {
    url.pathname = "/vi/blog";
    return Response.redirect(url, 301);
  }

  return NextResponse.next();
}
