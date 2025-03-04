"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateMagazine = ({ fileId }) => {
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchFileDetails = async () => {
      try {
        const response = await axios.get(`/api/magazine/${fileId}`);
        const fileData = response.data.file;

        setTitle(fileData.title);
        setDescription(fileData.description);
      } catch (error) {
        console.error("Error fetching file details:", error.message);
        setError("Failed to fetch file details");
      }
    };

    fetchFileDetails();
  }, [fileId]);

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!title) {
      setError("Title is required");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (file) {
      if (file.type !== "application/pdf") {
        setError("Please upload a PDF file");
        return;
      }
      formData.append("file", file);
    }

    try {
      setUploading(true);
      const response = await axios.put(`/api/magazine/${fileId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status !== 200) {
        throw new Error("Failed to update file");
      }

      const data = response.data;
      console.log(data.message);

      setSuccess("File updated successfully");
      setError("");
      setFile(null);
    } catch (error) {
      console.error(error.message);
      setError("Failed to update file");
      setSuccess("");
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
            Update File (PDF)
          </label>
          <input
            type="file"
            name="file"
            accept="application/pdf"
            className="w-full py-2 px-3 border border-border rounded-md"
            onChange={(e) => setFile(e.target.files[0])}
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
        {success && <p className="text-green-500">{success}</p>}
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

export default UpdateMagazine;
