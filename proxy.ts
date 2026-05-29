import createMiddleware from "next-intl/middleware";
import { routing } from "./lib/i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/((?!api|_next|_vercel|.*\\..*).*)",
    "/([\\w-]+)?/urotsi/:path*",
    "/([\\w-]+)?/instrumenti/:path*",
    "/([\\w-]+)?/rechnik/:path*",
    "/([\\w-]+)?/rakovodstva/:path*",
  ],
};
