import React from "react";
import { Wrapper } from "..";
import ProgramCard from "./ProgramCard";
import Link from "next/link";

const Programs = ({ items }) => {
  return (
    <div className="my-16">
      <Wrapper>
        <div className="mb-10 text-center text-3xl font-bold text-primary md:text-4xl">
          <h1>School Library Programs</h1>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items
            .filter((item) => item.category === "schoolLibraries")
            .slice(0, 3)
            .map((item, index) => (
              <ProgramCard
                key={index}
                images={item.images}
                title={item.title}
                description={item.description}
              />
            ))}
        </div>
        <Link href="/gallery/school-libraries">
          <button className="py-2 px-5 bg-primary text-white rounded-md mt-3">
            Load more...
          </button>
        </Link>

        <div className="my-10 text-center text-3xl font-bold text-primary md:text-4xl">
          <h1>CEA Province Libraries</h1>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items
            .filter((item) => item.category === "provinceLibraries")
            .slice(0, 3)
            .map((item, index) => (
              <ProgramCard
                key={index}
                images={item.images}
                title={item.title}
                description={item.description}
              />
            ))}
        </div>
        <Link href="/gallery/province-libraries">
          <button className="py-2 px-5 bg-primary text-white rounded-md mt-3">
            Load more...
          </button>
        </Link>

        <div className="my-10 text-center text-3xl font-bold text-primary md:text-4xl">
          <h1>Awareness Programs</h1>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items
            .filter((item) => item.category === "awarenessPrograms")
            .slice(0, 3)
            .map((item, index) => (
              <ProgramCard
                key={index}
                images={item.images}
                title={item.title}
                description={item.description}
              />
            ))}
        </div>
        <Link href="/gallery/awareness-programs">
          <button className="py-2 px-5 bg-primary text-white rounded-md mt-3">
            Load more...
          </button>
        </Link>
      </Wrapper>
    </div>
  );
};

export default Programs;
