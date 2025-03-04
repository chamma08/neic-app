"use client";

import React, { useState } from "react";
import { NewsCard, Wrapper } from "..";
import { news1, news2, news3, news4, news5, news6, news7 } from "../../assets";
import Link from "next/link";

// const getNews = async () => {
//   try {
//     const res = await fetch("http://localhost:3000/api/news", {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Faild to fetch news!");
//     }

//     return res.json();
//   } catch (error) {
//     console.log("Error loading news: ", error);
//   }
// };

const news = [
  {
    title: "News 1",
    createdDate: "July 18, 2024",
    image: news7,
    content:
      "This is a short description of News 1. It gives an overview of the content...",
  },
  {
    title: "News 2",
    createdDate: "July 17, 2024",
    image: news2,
    content:
      "This is a short description of News 2. It gives an overview of the content...",
  },
  {
    title: "News 3",
    createdDate: "July 16, 2024",
    image: news3,
    content:
      "This is a short description of News 3. It gives an overview of the content...",
  },
  {
    title: "News 4",
    createdDate: "July 16, 2024",
    image: news4,
    content:
      "This is a short description of News 3. It gives an overview of the content...",
  },
  {
    title: "News 5",
    createdDate: "July 16, 2024",
    image: news5,
    content:
      "This is a short description of News 3. It gives an overview of the content...",
  },
  {
    title: "News 6",
    createdDate: "July 16, 2024",
    image: news6,
    content:
      "This is a short description of News 3. It gives an overview of the content...",
  },
  {
    title: "News 7",
    createdDate: "July 16, 2024",
    image: news1,
    content:
      "This is a short description of News 3. It gives an overview of the content...",
  },
];

const postsPerPage = 9;

const NewsList = ({ news }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Handle pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = news.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(news.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Wrapper>
      <div className="min-h-screen mt-14 flex flex-col justify-between">
        <div className="flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPosts.map((post, index) => (
              <>
                <Link href={`/news/${post._id}`}>
                  <NewsCard
                    key={index}
                    image={post.image}
                    title={post.title}
                    createdDate={post.createdDate}
                    content={post.content}
                  />
                </Link>
              </>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-6 pb-4">
          <nav>
            <ul className="flex space-x-2">
              {pageNumbers.map((number) => (
                <li key={number}>
                  <button
                    onClick={() => paginate(number)}
                    className={`px-3 py-1 rounded ${
                      currentPage === number
                        ? "bg-primary text-white"
                        : "bg-white text-primary"
                    }`}
                  >
                    {number}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </Wrapper>
  );
};

export default NewsList;
