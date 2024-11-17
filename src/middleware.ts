import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/",
    "/(vi|en)/:path*", // Match for all internationalized paths
    "/((?!api|_next|_vercel|.*\\..*).*)", // Exclude api, _next, _vercel, and file extensions
  ],
};
