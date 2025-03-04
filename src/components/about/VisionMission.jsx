"use client";

import React from "react";
import { Wrapper } from "..";
import { useTranslation } from "react-i18next";

const VisionMission = () => {
  const { t } = useTranslation();
  return (
    <div className="py-8 mb-5 md:py-12">
      <Wrapper>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-1 p-6 bg-white shadow-lg rounded-2xl">
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              {t("about.vision.title")}
            </h2>
            <p className="mt-4 text-md text-text md:text-lg">
              {t("about.vision.description")}
            </p>
          </div>
          <div className="flex-1 p-6 bg-white shadow-lg rounded-2xl">
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              {t("about.mission.title")}
            </h2>
            <p className="mt-4 text-md text-text md:text-lg">
              {t("about.mission.description")}
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default VisionMission;
