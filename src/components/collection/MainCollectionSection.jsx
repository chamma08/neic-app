import Image from "next/image";
import {
  collection1,
  collection2,
  collection3,
  collection4,
  collection5,
  collection6,
  collection7,
  collection8,
  collection9,
} from "../../assets";
import { Wrapper } from "..";

const CollectionCard = ({ image, title }) => {
  return (
    <div className="bg-white cursor-pointer shadow-md rounded-lg text-center">
      <div className="w-full mx-auto ">
        <Image
          src={image}
          alt={`${title}'s image`}
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="p-10">
        <h3 className="text-xl font-bold text-primary">{title}</h3>
      </div>
    </div>
  );
};

const MainCollectionSection = () => {
  const collections = [
    {
      image: collection1,
      title: "Lending Collection",
    },
    {
      image: collection2,
      title: "CD/DVDs Collection",
    },
    {
      image: collection3,
      title: "Journals & Magazine",
    },
    {
      image: collection4,
      title: "Maps",
    },
    {
      image: collection5,
      title: "Leaflets & Newsletters",
    },
    {
      image: collection6,
      title: "EIA/ IEE Reports",
    },
    {
      image: collection7,
      title: "SL Daily Newspapers",
    },
    {
      image: collection8,
      title: "Soil Specimen box",
    },
    {
      image: collection9,
      title: "Leisure Corner",
    },
  ];
  return (
    <div className="mb-8 py-8 md:py-10">
      <Wrapper>
        <h1 className="mb-16 text-center text-2xl font-bold text-primary md:text-4xl">
          NEIC Main Collection
        </h1>
        {/* <p className="mb-16 text-center text-md text-text md:text-lg">
          The National Environmental Information Centre plays different roles in
          performing its services.
        </p> */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection, index) => (
            <CollectionCard
              key={index}
              image={collection.image}
              title={collection.title}
            />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default MainCollectionSection;
