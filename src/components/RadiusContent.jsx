"use client";
import { Slider } from "@/components/ui/slider";
import Button from "./Button";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setRadius } from "@/redux/slices/CountSlice";
import MapRangeWithOutMarker from "./MapRangeWithOutMarker";

function RadiusContent() {
  const dispatch = useDispatch();
  const { radius } = useSelector((state) => state.Count);

  const handleChange = (value) => {
    console.log("value : " + value);
    dispatch(setRadius(value));
  };

  return (
    <>
      <MapRangeWithOutMarker />
      <div className="flex flex-col justify-center items-center gap-1 bg-black/50">
        <div className="font-extrabold">서울 마포구 마포대로 122</div>
        <div>서울 마포구 마포대로 122 프론트원 4층</div>
      </div>

      <div className="py-8">
        <div className="flex flex-col justify-center items-center gap-1 my-4">
          <div className="text-xl">반경</div>
          <div className="text-3xl font-semibold">{radius}km</div>
        </div>

        <div className="flex justify-center items-center gap-4 whitespace-nowrap py-8">
          <span className="font-semibold">1km</span>
          <Slider
            value={[radius]}
            onValueChange={handleChange}
            defaultValue={[0]}
            max={5}
            step={1}
          />
          <span className="font-semibold">모든지역</span>
        </div>
        <Link href="main">
          <Button text={"저장하기"} type={"BOTTOM"}></Button>
        </Link>
      </div>
    </>
  );
}

export default RadiusContent;
