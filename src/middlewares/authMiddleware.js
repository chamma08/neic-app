// src/middlewares/authMiddleware.js
import { withAuth } from "next-auth/middleware";

export async function authMiddleware(request, event) {
  return withAuth({
    pages: {
      signIn: "/login",
    },
  })(request, event);
}

export const authConfig = {
  matcher: ["/admin"],
};
