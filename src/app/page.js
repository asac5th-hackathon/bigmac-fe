import Example from "./components/Example";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function Home() {
  return (
    <div className="">
      {/** 맵 예시 코드입니다. 추후 컴포넌트 분리 추천 */}
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: "100%", height: "360px" }}
      >
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
          <div style={{ color: "#000" }}>Hello World!</div>
        </MapMarker>
      </Map>
      <Example />
      <Example />
      <Example />
      <Example />
      <Example />
      {/* 여기에 컴포넌트 붙이면 됩니다. */}
    </div>
  );
}
