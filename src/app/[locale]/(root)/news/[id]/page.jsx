"use client";

import { Wrapper } from "@/components";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";

const RecentPosts = () => {
  const [recentPosts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get("/api/news");
      setPosts(response.data.news);
    };

    getPosts();
  }, []);
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Recent News</h2>
      <ul>
        {recentPosts.map((post) => (
          <li key={post._id} className="mb-2">
            <a href={post._id} className="text-text hover:underline">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const NewsPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`/api/news/${id}`);
      const data = await res.json();
      setPost(data.news);
    };
    fetchPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="mt-10 mb-20">
      <Wrapper>
        <div className="lg:flex gap-10">
          <div className="h-auto lg:w-3/4">
            <img
              src={post.image}
              alt={post.titile}
              className="w-full h-auto rounded-lg"
            />
            <h1 className="text-3xl font-bold my-4">{post.title}</h1>
            <p className="text-lg">{post.content}</p>
          </div>

          <div className="lg:w-1/4 mt-8 lg:mt-0">
            <RecentPosts />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default NewsPage;
