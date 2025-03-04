import React from "react";
import { Wrapper } from "..";
import Image from "next/image";
import { service8, service9, service7 } from "@/assets";
import Link from "next/link";

const OtherServicesSection = () => {
  return (
    <div className="py-8 mb-10 md:py-16">
      <Wrapper>
        <h2 className="mb-10 text-2xl text-center font-bold text-primary md:text-3xl">
          Other Services
        </h2>
        <h3 className="text-xl text-center font-bold text-text md:text-2xl">
          Searching of Journal articles
        </h3>
        <Link href="https://www.sljol.info/">
          <div className="mt-5 flex justify-center">
            <Image
              src={service8}
              alt="Floor Plan"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </Link>
        <h3 className="text-xl mt-16 text-center font-bold text-text md:text-2xl">
          ISBN/ISSN/ISMN for new publications
        </h3>
        <Link href="https://isbn.lk/index.php/Welcome/index">
          <div className="mt-5 flex justify-center gap-3">
            <Image
              src={service7}
              alt="Floor Plan"
              width={300}
              height={200}
              className="rounded-lg shadow-md"
            />
            <Image
              src={service9}
              alt="Floor Plan"
              width={300}
              height={200}
              className="rounded-lg shadow-md"
            />
          </div>
        </Link>
      </Wrapper>
    </div>
  );
};

export default OtherServicesSection;
