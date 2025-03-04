"use client";

import React from "react";
import { Wrapper } from "..";
import Image from "next/image";
import { map } from "../../assets";
import { useTranslation } from "react-i18next";

const FloorPlan = () => {
  const { t } = useTranslation();
  return (
    <div className="py-8 md:py-12">
      <Wrapper>
        <h1 className="text-3xl font-bold text-primary text-center md:text-4xl">
          {t("about.floor_plan")}
        </h1>
        <div className="mt-8 flex justify-center">
          <Image src={map} alt="Floor Plan" />
        </div>
      </Wrapper>
    </div>
  );
};

export default FloorPlan;
