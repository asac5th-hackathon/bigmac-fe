import { React } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";

function LocationSearch() {
  return (
    <>
      <div>
        <div className="pt-4 text-xl font-bold space-y-0">
          <div>합리적인 소비를 위한</div>
          <div>준비를 시작해볼까요?</div>
        </div>
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
            <Image
              src={"/images/SelectedLocation.svg"}
              width={24}
              height={24}
              alt="selectedLocation"
              className="py-2"
            />
            <div className="flex flex-col ">
              <div className="font-bold">서울 마포구 마포대로 122</div>
              <div className="text-xs">
                서울 마포구 마포대로 122 프론트원 4층
              </div>
            </div>
            <Image
              src={"/images/Checked.svg"}
              width={24}
              height={24}
              alt="Checked"
              className="flex py-2"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LocationSearch;
