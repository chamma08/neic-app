import React from "react";

const NewsCard = ({ image, title, createdDate, content }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md mx-auto my-2 cursor-pointer hover:shadow-lg transition-shadow duration-300">
      <img className="w-full h-48 object-cover" src={image} alt="News" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-600 text-xs mb-2">{createdDate}</p>
        <p className="text-gray-700 text-base">
          {content.slice(0, 100)}...
          <span className="text-blue-500 cursor-pointer">read more</span>
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
