"use client";

import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cover_2, cover_3, cover_6, cover_7, cover_14 } from "@/assets";
import Image from "next/image";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Wrapper } from "@/components";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Carousel = () => {
  const sliderRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [cover_2, cover_14, cover_3, cover_6, cover_7];

  return (
    <div className="relative flex items-center justify-between h-screen md:py-12">
      <Wrapper>
        <div className="flex items-center justify-between">
          <div className="z-10 max-w-md">
            <h3 className="text-2xl font-semibold text-white mb-2.5">
              {t("home.carousel.welcome")}
            </h3>
            <h1 className="text-4xl font-bold text-white">
              {t("home.carousel.header_text")}
            </h1>
            <p className="text-md my-5 font-bold text-white">
              {t("home.carousel.description")}
            </p>
            <div className="flex flex-col gap-2.5">
              <Link href="http://203.115.26.13:81/library/opac/">
                <button className="py-2.5 px-5 w-48 text-lg font-semibold text-white bg-yellow border-none rounded-md cursor-pointer transition-colors duration-300 hover:bg-primary">
                  {t("home.carousel.button1")}
                </button>
              </Link>
              <Link href="http://cea.nsf.ac.lk/">
                <button className="py-2.5 px-5 w-48 text-lg font-semibold text-white bg-yellow border-none rounded-md cursor-pointer transition-colors duration-300 hover:bg-primary">
                  {t("home.carousel.button2")}
                </button>
              </Link>
              <Link
                href="http://www.necir.cea.lk/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="py-2.5 px-5 w-48 text-lg font-semibold text-white bg-primary border-none rounded-md cursor-pointer transition-colors duration-300 hover:bg-secondary">
                  {t("home.carousel.button3")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
      <div className="absolute inset-0 z-0 h-full w-full">
        <Slider ref={sliderRef} {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full h-full bg-primary"
            >
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>

        <ArrowBackIosNew
          className="absolute top-1/2 transform -translate-y-1/2 left-5 text-white border-none cursor-pointer z-10 rounded-full p-2 text-5xl bg-secondary opacity-25 transition-opacity duration-300 hover:opacity-50"
          onClick={() => sliderRef.current.slickPrev()}
        />
        <ArrowForwardIos
          className="absolute top-1/2 transform -translate-y-1/2 right-5 text-white border-none cursor-pointer z-10 rounded-full p-2 text-5xl bg-secondary opacity-25 transition-opacity duration-300 hover:opacity-50"
          onClick={() => sliderRef.current.slickNext()}
        />
      </div>
    </div>
  );
};

export default Carousel;
