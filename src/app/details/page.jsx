import React from "react";
import DetailedList from "./DetailedList";
import Categories from "../main/Categories";
import { DetailedListContainer } from "./DetailedListContainer";

function page() {
  return (
    <div className=" ">
      <DetailedList />
      <Categories />
      <h2 className="pt-4 text-xl font-bold">전체 </h2>
      <DetailedListContainer />
      <DetailedListContainer />
    </div>
  );
}

export default page;
