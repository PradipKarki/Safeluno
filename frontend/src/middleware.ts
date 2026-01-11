// frontend/src/middleware.ts
import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    console.log("MIDDLEWARE IS RUNNING ON: ", req.nextUrl.pathname);
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = { 
  matcher: ["/dashboard/:path*"] 
};