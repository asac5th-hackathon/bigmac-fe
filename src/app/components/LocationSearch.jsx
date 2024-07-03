"use client";

import { React, useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Checked from "../../../public/images/Checked.svg";
import Search from "../../../public/images/Search.svg";
import Vector from "../../../public/images/Vector.svg";
import SelectedLocation from "../../../public/images/SelectedLocation.svg";

function LocationSearch() {
  return (
    <div className="py-2">
      <Input
        type="text"
        placeholder="지번, 도로명, 건물명으로 검색"
        className="bg-gray-200 text-sm"
      />
      <button className="w-full text-xs py-2 my-2 rounded-md border border-gray-400">
        현재 위치로 찾기
      </button>

      <div className="grid grid-cols-[10%_80%_10%] justify-items-stretch my-4">
        <Image src={SelectedLocation} alt="selectedLocation" className="py-2" />
        <div className="flex flex-col ">
          <div className="font-bold">서울 마포구 마포대로 122</div>
          <div className="text-xs">서울 마포구 마포대로 122 프론트원 4층</div>
        </div>
        <Image src={Checked} alt="Checked" className="flex py-2" />
      </div>
    </div>
  );
}

export default LocationSearch;
