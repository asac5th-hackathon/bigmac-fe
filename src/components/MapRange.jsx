"use client";

import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function MapRange() {
  const lat = 37.544575;
  const lng = 126.951136;
  const [shopList, setShopList] = useState([]);

  useEffect(() => {
    const fetchStore = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/store?latitude=37.544575&longitude=126.951136&distance=400000&categoryId=1"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setShopList(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchStore();
  }, []);

  return (
    <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: lat,
        lng: lng,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "450px",
      }}
      level={3} // 지도의 확대 레벨
    >
      {shopList.map((position, index) => (
        <MapMarker
          key={`${position.id}`}
          position={{ lat: position.latitude, lng: position.longitude }} // 마커를 표시할 위치
          title={position.name} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        >
          {position.price && (
            <div className="text-center">
              {Math.floor(position.price * 1387.55)} 원
            </div>
          )}
        </MapMarker>
      ))}
    </Map>
  );
}

export default MapRange;
