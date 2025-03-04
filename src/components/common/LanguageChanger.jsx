"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "../../../i18nConfig";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (newLocale) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <div className="flex items-center justify-between gap-2">
      <button
        onClick={() => handleChange("en")}
        className={`bg-primary text-white py-1 px-2 rounded text-xs cursor-pointer transition-all duration-300 transform shadow-md ${
          currentLocale === "en" ? "bg-teal" : ""
        } ${currentLocale === "en" ? "translate-y-0" : ""} ${
          currentLocale === "en" ? "shadow-md" : ""
        } hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-md`}
      >
        English
      </button>
      {/* <button
        onClick={() => handleChange("si")}
        className={`bg-primary text-white py-1 px-2 rounded text-xs cursor-pointer transition-all duration-300 transform shadow-md ${
          currentLocale === "si" ? "bg-teal" : ""
        } ${currentLocale === "si" ? "translate-y-0" : ""} ${
          currentLocale === "si" ? "shadow-md" : ""
        } hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-md`}
      >
        සිංහල
      </button>
      <button
        onClick={() => handleChange("ta")}
        className={`bg-primary text-white py-1 px-2 rounded text-xs cursor-pointer transition-all duration-300 transform shadow-md ${
          currentLocale === "ta" ? "bg-teal" : ""
        } ${currentLocale === "ta" ? "translate-y-0" : ""} ${
          currentLocale === "ta" ? "shadow-md" : ""
        } hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-md`}
      >
        தமிழ்
      </button> */}
    </div>
  );
}
