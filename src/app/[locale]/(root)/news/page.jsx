import { Header, NewsList } from "@/components";
import { cover_13 } from "@/assets";

const BASE_URL = process.env.BASE_URL;

const getNews = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/news`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Faild to fetch news!");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading news: ", error);
  }
};

const page = async () => {
  const { news } = await getNews();
  const pageName = "News";
  const description = "Environmental News Collection.";

  return (
    <div>
      <Header pageName={pageName} image={cover_13} description={description} />
      <NewsList news={news} />
    </div>
  );
};

export default page;
