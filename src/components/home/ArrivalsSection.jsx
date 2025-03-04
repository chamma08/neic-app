"use client";

import React, { useState, useEffect } from "react";
import { book1, book2, book3, book4, book5 } from "@/assets";
import Image from "next/image";
import { Wrapper } from "@/components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Link from "next/link";

const ArrivalsSection = () => {
  const { t } = useTranslation();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const response = await axios.get("/api/books");
      setBooks(response.data.books);
    };

    getBooks();
  }, []);

  // const books = [
  //   { image: book1, title: "Book 1" },
  //   { image: book2, title: "Book 2" },
  //   { image: book3, title: "Book 3" },
  //   { image: book4, title: "Book 4" },
  //   { image: book5, title: "Book 5" },
  //   { image: book1, title: "Book 1" },
  //   { image: book2, title: "Book 5 sdffsdfsdfsdf" },
  //   { image: book3, title: "Book 5 sdffsdfsdfsdf" },
  //   { image: book4, title: "Book 5 sdffsdfsdfsdf" },
  //   { image: book5, title: "Book 5 sdffsdfsdfsdf" },
  // ];

  const settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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

  return (
    <div className="mt-12">
      <Wrapper>
        <div className="py-14">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            {t("home.arrivals.title")}
          </h2>
          <div className="flex items-center justify-center p-12 rounded-xl bg-primary shadow-md">
            <div className="w-full">
              <Slider {...settings}>
                {books.map((book, index) => (
                  <div key={index}>
                    <Link href={book.link}>
                      <div className="flex flex-col items-center justify-center cursor-pointer mx-2">
                        <img
                          src={book.image}
                          alt={book.title}
                          className="w-[150px] h-[200px] rounded-md border-2 border-soft-green md:h-[250px]"
                        />
                        <h3 className="mt-2 text-base text-center text-soft-green">
                          {book.title}
                        </h3>
                      </div>
                    </Link>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ArrivalsSection;
