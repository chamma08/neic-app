import Image from "next/image";
import React from "react";
import { Wrapper } from "..";

const Header = ({ pageName, description, image }) => {
  return (
    <div className="relative flex items-center justify-between h-[400px] py-12 md:py-24">
      <Wrapper>
        <div className="flex items-center justify-between">
          <div className="z-10 max-w-md">
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              {pageName}
            </h1>
            <p className="mt-4 text-lg font-semibold text-white md:text-xl">
              {description}
            </p>
          </div>
          <div className="absolute inset-0 z-0 h-full w-full">
            <Image
              src={image}
              alt="background-image"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
