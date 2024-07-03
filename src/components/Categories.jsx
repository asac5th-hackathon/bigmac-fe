"use client";
import React, { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import ProductAdd from "./ProductAdd";
import MapRange from "./MapRange";

const categories = [
  {
    id: 1,
    title: "전체",
  },
  {
    id: 2,
    title: "과일",
  },
  {
    id: 3,
    title: "채소",
  },
  {
    id: 4,
    title: "유제품/냉장",
  },
  {
    id: 5,
    title: "정육/계란",
  },
  {
    id: 6,
    title: "수산물",
  },
  {
    id: 7,
    title: "쌀/잡곡",
  },
  {
    id: 8,
    title: "견과/건과",
  },
  {
    id: 9,
    title: "베이커리/떡",
  },
  {
    id: 10,
    title: "면/양념",
  },
  {
    id: 11,
    title: "생수",
  },
  {
    id: 12,
    title: "커피",
  },
];

const productData = {
  전체: [
    { name: "제품 1", price: "1000 원" },
    { name: "제품 2", price: "2000 원" },
    { name: "제품 3", price: "3000 원" },
  ],
  과일: [
    { name: "사과", price: "1,000 원" },
    { name: "수박", price: "5,000 원" },
    { name: "참외", price: "7,000 원" },
  ],
  채소: [
    { name: "상추", price: "1,200 원" },
    { name: "오이", price: "1,500 원" },
    { name: "토마토", price: "3,000 원" },
  ],
  "유제품/냉장": [
    { name: "우유", price: "2,500 원" },
    { name: "요구르트", price: "2,800 원" },
    { name: "치즈", price: "3,000 원" },
  ],
  "정육/계란": [
    { name: "소고기", price: "2,000 원" },
    { name: "닭고기", price: "3,000 원" },
    { name: "달걀", price: "4,000 원" },
  ],
  수산물: [
    { name: "연어", price: "5,000 원" },
    { name: "오징어", price: "6,000 원" },
    { name: "게", price: "7,000 원" },
  ],
  "쌀/잡곡": [
    { name: "쌀", price: "2,000 원" },
    { name: "보리", price: "2,500 원" },
    { name: "현미", price: "3,000 원" },
  ],
  "견과/건과": [
    { name: "아몬드", price: "3,000 원" },
    { name: "건포도", price: "3,500 원" },
    { name: "호두", price: "4,000 원" },
  ],
  "베이커리/떡": [
    { name: "빵", price: "2,000 원" },
    { name: "찹쌀떡", price: "2,500 원" },
    { name: "크로와상", price: "3,000 원" },
  ],
  "면/양념": [
    { name: "라면", price: "1,500 원" },
    { name: "소스", price: "1,800 원" },
    { name: "고추장", price: "2,000 원" },
  ],
  생수: [
    { name: "미네랄워터", price: "800 원" },
    { name: "생수", price: "1,000 원" },
    { name: "탄산수", price: "1,200 원" },
  ],
  커피: [
    { name: "아메리카노", price: "2,000 원" },
    { name: "카페라떼", price: "2,500 원" },
    { name: "에스프레소", price: "3,000 원" },
  ],
};

export { categories, productData };

function Categories() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.id);
  };

  return (
    <>
      <MapRange />
      <div className="relative mt-4">
        <button
          onClick={toggleModal}
          className="px-12 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-300"
        >
          전체 카테고리
        </button>
        {isModalOpen && (
          <div className="absolute w-full top-full left-0 mt-2 bg-white border border-blue-300 rounded-lg shadow-lg p-2">
            <div className="grid grid-cols-4 gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category)}
                  className={`px-4 py-2 border border-gray-100 justify-items-center whitespace-nowrap text-xs hover:bg-gray-100 rounded transition duration-300 ${
                    selectedCategory === category.title ? "bg-gray-200" : ""
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedCategory && (
          <>
            <div className="mt-4"></div>
            <ProductAdd selectedCategory={selectedCategory} />
          </>
        )}
      </div>
    </>
  );
}

export default Categories;
