"use client";

import React, { useState } from "react";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";

const AddItem = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e) => {
    const newFiles = Array.from(e.target.files);

    // Append new images to the current list
    setImages((prevImages) => [...prevImages, ...newFiles]);

    // Append new previews to the current list
    const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
    setImagePreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  const removeNewImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
    setImagePreviews(imagePreviews.filter((_, i) => i !== index));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!title || !images.length || !category) {
      setError("All fields are required");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    images.forEach((image) => formData.append("images", image));

    console.log("form data: ", formData);

    try {
      setUploading(true);
      const response = await axios.post("/api/galleryItems", formData);

      if (response.status !== 200) {
        throw new Error("Failed to add item");
      }

      setError("");
      console.log("Item added successfully");
      setTitle("");
      setDescription("");
      setCategory("");
      setImages([]);
      setImagePreviews([]);
    } catch (error) {
      console.error("Failed to add item:", error);
      setError("Failed to add item");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg">
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="images"
            className="block text-sm font-bold mb-2 text-text"
          >
            Upload Images
          </label>
          <input
            type="file"
            name="images"
            className="w-full py-2 px-3 border border-border rounded-md"
            onChange={handleImageChange}
            multiple
          />
          <div className="mt-4 flex items-center gap-3">
            {imagePreviews.map((preview, index) => (
              <div key={index} className="relative">
                <img
                  src={preview}
                  alt={`New Preview ${index}`}
                  className="w-32 h-32 object-cover rounded-md"
                />

                <CloseIcon
                  onClick={() => removeNewImage(index)}
                  fontSize="small"
                  className="cursor-pointer absolute top-0 right-0 bg-white text-text p-1 m-1 rounded-full"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <label
            className="block text-sm font-bold mb-2 text-text"
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
            className="block text-sm font-bold mb-2 text-text"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full py-2 px-3 border border-border rounded-md h-32"
          />
        </div>

        <div>
          <label
            className="block text-sm font-bold mb-2 text-text"
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

        {error && <p className="text-red">{error}</p>}

        <button
          type="submit"
          disabled={uploading}
          className={`bg-primary font-semibold p-3 w-32 text-center rounded text-white ${
            uploading ? "opacity-50" : "opacity-100"
          }`}
        >
          {uploading ? "Uploading..." : "Add Item"}
        </button>
      </form>
    </div>
  );
};

export default AddItem;
