"use client";

import React from "react";
import { Wrapper } from "..";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div className="py-10 md:py-16">
      <Wrapper>
        <h1 className="text-3xl font-bold text-primary md:text-4xl">
          {t("about.about_us.title")}
        </h1>
        <p className="mt-5 text-md text-justify text-text md:text-lg">
          {t("about.about_us.description1")}
        </p>
      </Wrapper>
    </div>
  );
};

export default AboutUs;
