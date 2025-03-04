"use client";

import { Wrapper } from "@/components";
import Image from "next/image";
import { award } from "@/assets";
import { useTranslation } from "react-i18next";

const AwardSection = () => {
  const { t } = useTranslation();

  return (
    <section className="mt-14 py-14 lg:px-24 bg-soft-green">
      <Wrapper>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-5">
          <div className="flex justify-start items-center lg:w-1/3">
            <Image
              className="h-auto max-w-xs rounded-lg transition-transform duration-300 hover:scale-105 border-2 cursor-pointer border-yellow lg:w-4/5"
              src={award}
              alt="NEIC"
            />
          </div>
          <div className="lg:w-2/3">
            <h2 className="text-4xl text-center font-bold text-primary mb-7 lg:text-left">
              {t("home.award.title")}
            </h2>
            <p className="text-lg leading-7 text-text lg:text-justify text-justify">
              {t("home.award.description_part1")}
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default AwardSection;
