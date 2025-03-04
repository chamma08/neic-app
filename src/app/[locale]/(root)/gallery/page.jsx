import { Programs } from "@/components";

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

const Gallery = async () => {
  const { items } = await getItems();
  return (
    <div>
      <div className="min-h-screen">
        <Programs items={items} />
      </div>
    </div>
  );
};

export default Gallery;
