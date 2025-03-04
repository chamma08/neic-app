"use client";

import React, { useState } from "react";
import axios from "axios";

const AddCollection = () => {
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const description = event.target.description.value;
    const category = event.target.category.value;
    const imageFile = event.target.image.files[0];

    if (!title || !imageFile || !category) {
      setError("All fields are required");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", imageFile);
    formData.append("category", category);

    try {
      setUploading(true);
      const response = await axios.post("/api/collection", formData);

      if (response.status !== 201) {
        throw new Error("Failed to add a book");
      }

      const data = response.data;
      console.log(data.message);

      setTitle("");
      setDescription("");
      setCategory("");
      event.target.image.value = "";
    } catch (error) {
      console.error(error.message);
      setError("Failed to create collection");
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
            Description
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
          {uploading ? "Uploading.." : "Upload"}
        </button>
      </form>
    </div>
  );
};

export default AddCollection;
