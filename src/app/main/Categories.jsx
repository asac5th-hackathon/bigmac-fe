"use client";
import React, { useState } from "react";

function Categories() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    "전체",
    "과일",
    "채소",
    "유제품/냉장",
    "정육/계란",
    "수산물",
    "쌀/잡곡",
    "견과/건과",
    "베이커리/떡",
    "면/양념",
    "생수",
    "커피",
  ];

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleModal}
        className="px-12 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-300"
      >
        전체 카테고리
      </button>
      {isModalOpen && (
        <div className="absolute w-full top-full left-0 mt-2 bg-white border border-blue-300 rounded-lg shadow-lg p-2">
          <div className="grid grid-cols-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 border border-gray-100 justify-items-center whitespace-nowrap text-xs hover:bg-gray-100 rounded transition duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Categories;
