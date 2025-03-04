// src/middlewares/i18nMiddleware.js
import { i18nRouter } from "next-i18n-router";
import i18nConfig from "../../i18nConfig";

export function i18nMiddleware(request) {
  return i18nRouter(request, i18nConfig);
}

export const i18nConfigMatcher = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
