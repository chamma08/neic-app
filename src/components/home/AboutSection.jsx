"use client";

import Image from "next/image";
import { Wrapper } from "@/components";
import { about } from "@/assets";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Wrapper>
        <section className="flex flex-col md:flex-row items-center justify-between p-5 bg-soft-green rounded-xl gap-14 mt-14 md:p-10">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-primary mb-7">
              {t("home.about_us.title")}
            </h2>
            <p className="text-lg leading-7 text-text text-justify">
              {t("home.about_us.description")}
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Image className="max-w-full rounded-lg" src={about} alt="NEIC" />
          </div>
        </section>
      </Wrapper>
    </div>
  );
};

export default AboutSection;
