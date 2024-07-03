import React from "react";
import Categories from "./Categories";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function page() {
  return (
    <div>
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: "100%", height: "450px" }}
      >
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}></MapMarker>
      </Map>
      <Categories />
    </div>
  );
}

export default page;
