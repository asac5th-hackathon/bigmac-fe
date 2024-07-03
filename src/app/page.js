import { Map, MapMarker } from "react-kakao-maps-sdk";
import Headername from "@/layout/HeaderName";
import Button from "./components/Button";
import Radius from "./components/Radius";

export default function Home() {
  return (
    <div className="">
      {/** 맵 예시 코드입니다. 추후 컴포넌트 분리 추천 */}
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: "100%", height: "450px" }}
      >
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}></MapMarker>
      </Map>
      <Radius />

      {/* 여기에 컴포넌트 붙이면 됩니다. */}
    </div>
  );
}
