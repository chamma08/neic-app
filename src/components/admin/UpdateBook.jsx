"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateBook = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/books/${id}`);
        if (response.status === 200) {
          const { title, description, image, link } = response.data.book;
          setTitle(title);
          setDescription(description);
          if (image) {
            setImagePreview(image);
          }
          setLink(link);
          setLoading(false);
        } else {
          setError("Failed to fetch book data");
        }
      } catch (error) {
        console.error(error);
        setError("Failed to fetch book data");
      }
    };

    fetchData();
  }, [id]);

  const onSubmit = async (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const description = event.target.description.value;
    const imageFile = event.target.image.files[0];
    const link = event.target.link.value;

    if (!title) {
      setError("Title and content are required");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (imageFile) {
      formData.append("image", imageFile);
    }
    formData.append("link", link);

    try {
      setUploading(true);
      const response = await axios.put(`/api/books/${id}`, formData);

      if (response.status !== 200) {
        throw new Error("Failed to update post");
      }

      const data = response.data;
      console.log(data.message);
    } catch (error) {
      console.error(error.message);
      setError("Failed to update book");
    } finally {
      setUploading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImagePreview(URL.createObjectURL(file));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

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
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full py-2 px-3 border border-border rounded-md h-40"
          />
        </div>
        <div>
          <label
            className="block text-text text-sm font-bold mb-2"
            htmlFor="link"
          >
            Link
          </label>
          <input
            type="text"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="w-full py-2 px-3 border border-border rounded-md"
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
          {uploading ? "Updating.." : "Update"}
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
