"use client";

import Image from "next/image";
import { emblem } from "@/assets";
import Link from "next/link";
import { Wrapper } from "@/components";
import { useTranslation } from "react-i18next";

const Card = ({ image, text, link }) => {
  return (
    <>
      <Link href={link}>
        <div className="flex items-center justify-start gap-7 bg-white rounded-lg shadow-lg overflow-hidden p-4 transition-transform duration-200 h-24 cursor-pointer card hover:translate-y-[-5px]">
          <div className="w-12 flex-shrink-0">
            <Image
              src={image}
              alt={text}
              className="w-full h-full object-fill"
            />
          </div>
          <p className="text-lg font-semibold text-text">{text}</p>
        </div>
      </Link>
    </>
  );
};

const LinksSection = () => {
  const { t } = useTranslation();

  const cardData = [
    {
      image: emblem,
      text: t("home.links.link1"),
      link: "https://www.env.gov.lk/",
    },
    {
      image: emblem,
      text: t("home.links.link2"),
      link: "https://www.cea.lk/",
    },
    {
      image: emblem,
      text: t("home.links.link3"),
      link: "https://coastal.gov.lk/index.php?lang=en",
    },
    {
      image: emblem,
      text: t("home.links.link4"),
      link: "https://ngja.gov.lk/",
    },
    {
      image: emblem,
      text: t("home.links.link5"),
      link: "https://www.dwc.gov.lk/",
    },
    {
      image: emblem,
      text: t("home.links.link6"),
      link: "https://www.gsmb.gov.lk/index.php?lang=en",
    },
    {
      image: emblem,
      text: t("home.links.link7"),
      link: "https://nationalzoo.gov.lk/",
    },
    {
      image: emblem,
      text: t("home.links.link8"),
      link: "http://www.forestdept.gov.lk/index.php/en/",
    },
    {
      image: emblem,
      text: t("home.links.link9"),
      link: "https://mepa.gov.lk/",
    },
    {
      image: emblem,
      text: t("home.links.link10"),
      link: "http://www.nara.ac.lk/",
    },
    {
      image: emblem,
      text: t("home.links.link11"),
      link: "https://www.uda.gov.lk/",
    },
    {
      image: emblem,
      text: t("home.links.link12"),
      link: "https://wma.wp.gov.lk/",
    },
  ];

  return (
    <div className="bg-[#f7fafc] pb-24 flex items-center justify-center">
      <Wrapper>
        <h2 className="text-4xl font-bold text-primary my-14 text-center">
          {t("home.links.title")}
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
      </Wrapper>
    </div>
  );
};

export default LinksSection;
