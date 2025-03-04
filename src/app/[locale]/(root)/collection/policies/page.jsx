"use client";

import { Header, Wrapper, PDFViewer } from "@/components";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { cover_10 } from "@/assets";
import { pdf } from "@/assets";
import Image from "next/image";

const FileCard = ({ title, description, file, onClick }) => {
  return (
    <>
      <div
        onClick={() => onClick(file)}
        className="flex border border-teal items-center justify-start gap-7 bg-white rounded-lg shadow-md overflow-hidden p-4 transition-transform duration-200 h-24 cursor-pointer card hover:translate-y-[-5px]"
      >
        <div className="w-16 flex-shrink-0">
          <Image src={pdf} alt={title} className="w-full h-full object-fill" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold text-text">{title}</p>
          <p className="text-sm font-base text-text">{description}</p>
        </div>
      </div>
    </>
  );
};

const Policies = () => {
  const [files, setFiles] = useState([]);
  const [filePath, setFilePath] = useState(null);

  const pageName = "CDP Files";
  const description = "Collection Development Policy";

  console.log(files);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get("/api/files");
        setFiles(response.data.files);
      } catch (error) {
        console.error("Error fetching files:", error.message);
      }
    };

    fetchFiles();
  }, []);

  const handleFileClick = (file) => {
    setFilePath(file);
  };

  return (
    <div>
      <Header pageName={pageName} description={description} image={cover_10} />
      <div className="my-16">
        <Wrapper>
          <div className="py-6 mb-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {files.map((file) => (
              <FileCard
                key={file._id}
                title={file.title}
                description={file.description}
                file={file.file}
                onClick={handleFileClick}
              />
            ))}
          </div>
          {filePath && <PDFViewer filePath={filePath} />}
        </Wrapper>
      </div>
    </div>
  );
};

export default Policies;
