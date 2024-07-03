import Image from "next/image";
import React from "react";
import Button from "./Button";
import { categories } from "./Categories";
import { productData } from "./Categories";

function ProductAdd({ selectedCategory }) {
  const filterProduct = selectedCategory
    ? productData[categories.find((cat) => cat.id === selectedCategory).title]
    : [];
  return (
    <>
      <div className="w-full bg-gray-400 grid grid-cols-2 h-[200px] content-center justify-items-center my-4 ">
        <Image src={"/images/money.svg"} alt="임시" width={120} height={120} />

        <div className="flex flex-col gap-2">
          <>
            <div className="mt-4">
              <h3 className="text-lg font-bold mb-2">
                {categories.find((cat) => cat.id === selectedCategory).title}
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              {filterProduct.map((product, index) => (
                <div key={index}>
                  <h2>
                    {product.name} : {product.price}
                  </h2>
                </div>
              ))}
            </div>
          </>
        </div>
      </div>
      <div className="flex justify-around text-2xl">
        <Button text={"상품 등록"} type={"ADD"} />
        <Button text={"상세 보기"} type={"ADD"} />
      </div>
    </>
  );
}

export default ProductAdd;
