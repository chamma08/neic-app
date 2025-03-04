"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateCollection = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/collection/${id}`);
        if (response.status === 200) {
          const { title, description, image, category } =
            response.data.collection;
          setTitle(title);
          setDescription(description);
          setCategory(category);
          if (image) {
            setImagePreview(image);
          }
          setLoading(false);
        } else {
          setError("Failed to fetch collection data");
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
    const category = event.target.category.value;

    if (!title || !category) {
      setError("Title and category are required");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      setUploading(true);
      const response = await axios.put(`/api/collection/${id}`, formData);

      if (response.status !== 200) {
        throw new Error("Failed to update collection");
      }

      const data = response.data;
      console.log(data.message);
    } catch (error) {
      console.error(error.message);
      setError("Failed to update Collection");
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
            htmlFor="category"
          >
            Category
          </label>
          <select
            id="category"
            disabled
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full py-2 px-3 border border-border rounded-md"
            required
          >
            <option value="">Select a category</option>
            <option value="awarenessPrograms">Awareness Programs</option>
            <option value="provinceLibraries">Province Libraries</option>
            <option value="schoolLibraries">School Libraries</option>
          </select>
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

export default UpdateCollection;
