import { Wrapper } from "@/components";
import ProgramCard from "@/components/gallery/ProgramCard";
import React from "react";

const BASE_URL = process.env.BASE_URL;

const getItems = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/galleryItems`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Faild to fetch items!");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading items: ", error);
  }
};

const Awareness = async () => {
  const { items } = await getItems();
  return (
    <div className="my-16">
      <Wrapper>
        <div className="mb-12 text-center text-3xl font-bold text-primary md:text-4xl">
          <h1>Awareness Programs</h1>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items
            .filter((item) => item.category === "awarenessPrograms")
            .map((item, index) => (
              <ProgramCard
                key={index}
                images={item.images}
                title={item.title}
                description={item.description}
              />
            ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Awareness;
