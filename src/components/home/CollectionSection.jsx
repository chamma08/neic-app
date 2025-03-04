import Image from "next/image";
import { Wrapper } from "..";
import { collection1, book1 } from "../../assets";
import Link from "next/link";

const CollectionCard = ({ image, title, link }) => {
  return (
    <Link href={link}>
      <div className="bg-white cursor-pointer shadow-md hover:shadow-lg rounded-lg text-center w-full lg:w-[400px] transition-shadow duration-200">
        <div className="mx-auto">
          <Image
            src={image}
            alt={`${title}'s image`}
            className="object-cover w-full h-60 rounded-t-lg"
          />
        </div>
        <div className="p-10">
          <h3 className="text-xl font-bold text-primary">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

const CollectionSection = () => {
  const collections = [
    {
      image: collection1,
      title: "Collection Development Policy",
      link: "/collection/policies",
    },
    {
      image: book1,
      title: "Sobasara e - Magazine",
      link: "/collection/magazine",
    },
  ];
  return (
    <div className="my-8 py-8 md:py-10">
      <Wrapper>
        <div>
          <h1 className="mb-16 text-center text-3xl font-bold text-primary md:text-4xl">
            NEIC e - Publications
          </h1>

          <div className="flex flex-col items-start justify-center gap-8 md:flex-row">
            {collections.map((collection, index) => (
              <CollectionCard
                key={index}
                image={collection.image}
                title={collection.title}
                link={collection.link}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default CollectionSection;
