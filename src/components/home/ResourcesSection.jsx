"use client";

import { Wrapper } from "@/components";
import { icon1, icon2, icon3, icon4, icon5, icon6 } from "@/assets";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Card = ({ image, text, link }) => {
  return (
    <>
      <Link href={link}>
        <div className="flex flex-col items-center justify-start bg-white rounded-lg overflow-hidden p-4 transition-transform duration-200 w-72 h-auto border border-teal hover:cursor-pointer hover:translate-y-[-5px]">
          <Image src={image} alt={text} className="w-full h-auto p-5" />
          <h3 className="my-4 text text-lg font-semibold text-text text-center">
            {text}
          </h3>
        </div>
      </Link>
    </>
  );
};

const ResourcesSection = () => {
  const { t } = useTranslation();

  const cardData = [
    {
      image: icon1,
      text: t("home.resources.resource1"),
      link: "",
    },
    {
      image: icon3,
      text: t("home.resources.resource2"),
      link: "",
    },
    {
      image: icon4,
      text: t("home.resources.resource3"),
      link: "https://www.env.gov.lk/web/index.php/en/downloads/policies",
    },
    { image: icon5, text: t("home.resources.resource4"), link: "" },
    {
      image: icon6,
      text: t("home.resources.resource5"),
      link: "https://idb.nsf.gov.lk/",
    },
    {
      image: icon2,
      text: t("home.resources.resource6"),
      link: "http://203.115.26.10/2020/Air%20Quality%20Web/Scaffold/index.html",
    },
  ];

  return (
    <div className="mt-14">
      <Wrapper>
        <div className="flex flex-col items-center justify-between">
          <h2 className="text-4xl font-bold text-primary mb-8">
            {t("home.resources.title")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {cardData.map((card, index) => (
              <Card
                key={index}
                image={card.image}
                text={card.text}
                link={card.link}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ResourcesSection;
