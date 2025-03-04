"use client";

import React, { useState } from "react";
import axios from "axios";

const AddMagazine = () => {
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const description = event.target.description.value;
    const file = event.target.file.files[0];

    if (!title || !file) {
      setError("All fields are required");
      return;
    }

    if (file.type !== "application/pdf") {
      setError("Please upload a PDF file");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", file);

    try {
      setUploading(true);
      const response = await axios.post("/api/magazine", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status !== 201) {
        throw new Error("Failed to upload the file");
      }

      const data = response.data;
      console.log(data.message);

      setTitle("");
      setDescription("");
      event.target.file.value = "";
    } catch (error) {
      console.error(error.message);
      setError("Failed to upload file");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="file"
            className="block text-text text-sm font-bold mb-2"
          >
            File (PDF)
          </label>
          <input
            type="file"
            name="file"
            accept="application/pdf"
            className="w-full py-2 px-3 border border-border rounded-md"
            required
          />
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
            htmlFor="description"
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

export default AddMagazine;
