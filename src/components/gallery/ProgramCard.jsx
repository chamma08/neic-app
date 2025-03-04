"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProgramCard = ({ images, title, description }) => {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <Dialog>
      <DialogTrigger className="">
        <div className="bg-white cursor-pointer shadow-md rounded-lg text-center">
          <div className="w-full h-64 overflow-hidden rounded-t-lg">
            <img
              src={images[0]}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-7">
            <h3 className="text-xl font-bold text-primary">{title}</h3>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="w-4xl max-w-4xl bg-white border-none">
        <div className="w-full h-[400px] overflow-hidden rounded-lg">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`${title} image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>

        <h3 className="my-2 text-xl font-bold text-primary">{title}</h3>
        {description && <p className="text-text text-base">{description}</p>}
      </DialogContent>
    </Dialog>
  );
};

export default ProgramCard;
