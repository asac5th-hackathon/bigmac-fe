import Image from "next/image";
import React from "react";
import Button from "./Button";

function ProductAdd() {
  return (
    <>
      <div className="w-full bg-gray-400 grid grid-cols-2 h-[200px] content-center justify-items-center my-4 ">
        <Image
          src={"/images/defaultprofile.svg"}
          alt="임시"
          width={120}
          height={120}
        />

        <div className="flex flex-col gap-2">
          <span>데이터 들어올곳</span>
          <span>데이터 들어올곳</span>
          <span>데이터 들어올곳</span>
          <span>데이터 들어올곳</span>
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
