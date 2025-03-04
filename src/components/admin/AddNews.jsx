"use client";

import React, { useState } from "react";
import axios from "axios";

const AddNews = () => {
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const content = event.target.content.value;
    const imageFile = event.target.image.files[0];

    if (!title || !content || !imageFile) {
      setError("All fields are required");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", imageFile);

    try {
      setUploading(true);
      const response = await axios.post("/api/news", formData);

      if (response.status !== 201) {
        throw new Error("Failed to create post");
      }

      const data = response.data;
      console.log(data.message);

      setTitle("");
      setContent("");
      event.target.image.value = "";
    } catch (error) {
      console.error(error.message);
      setError("Failed to create post");
    } finally {
      setUploading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="image"
            className="block text-text text-sm font-bold mb-2"
          >
            Image
          </label>
          <input
            type="file"
            name="image"
            className="w-full py-2 px-3 border border-border rounded-md"
            onChange={handleImageChange}
            required
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Selected"
              className="mt-4 w-96 h-40 object-cover rounded-md"
            />
          )}
        </div>
        <div>
          <label
            className="block text-text text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full py-2 px-3 border border-border rounded-md"
            required
          />
        </div>
        <div>
          <label
            className="block text-text text-sm font-bold mb-2"
            htmlFor="content"
          >
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full py-2 px-3 border border-border rounded-md h-40"
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          disabled={uploading}
          className={`bg-primary p-3 w-32 text-center rounded text-white ${
            uploading ? "opacity-50" : "opacity-100"
          }`}
        >
          {uploading ? "Uploading.." : "Upload"}
        </button>
      </form>
    </div>
  );
};

export default AddNews;
