import React from "react";

function DetailedList() {
  return (
    <div className="container rounded-lg py-4 px-2 bg-gray-200">
      <div className="flex justify-between px-4">
        <div className="rounded-lg bg-gray-500 w-[30%]">가게 사진</div>
        <div className="">
          <p className="rounded-lg bg-gray-500 ">가게 이름</p>
          <p className="rounded-lg bg-gray-500">위치</p>
          <p className="rounded-lg bg-gray-500 ">영업 시간</p>
        </div>
      </div>
    </div>
  );
}

export default DetailedList;
