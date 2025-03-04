"use client";

import { Wrapper } from "@/components";
import { useTranslation } from "react-i18next";

const TourSection = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-primary py-14 lg:px-24 lg:min-h-screen">
      <Wrapper>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold mb-8 text-white">Library Tour</h1>
          <div className="relative w-full h-[500px] overflow-hidden rounded-xl border-2 border-primary transition-colors duration-300 hover:border-teal">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/0xvZ3mjUIDw"
              title="ජාතික පාරිසරික තොරතුරු මධ්‍යස්ථානය"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default TourSection;
