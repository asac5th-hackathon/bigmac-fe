"use client";

import React, { useEffect, useState } from "react";
import { Circle, Map, MapMarker } from "react-kakao-maps-sdk";
import { useSelector } from "react-redux";

function MapRangeWithOutMarker() {
  const lat = 37.544575;
  const lng = 126.951136;
  const { radius } = useSelector((state) => state.Count);
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
        ></MapMarker>
      ))}
      <Circle
        center={{
          lat: lat,
          lng: lng,
        }}
        radius={radius * 40}
        strokeWeight={5} // 선의 두께입니다
        strokeColor={"#75B8FA"} // 선의 색깔입니다
        strokeOpacity={2} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle={"solid"} // 선의 스타일 입니다
        fillColor={"#CFE7FF"} // 채우기 색깔입니다
        fillOpacity={0.7} // 채우기 불투명도 입니다
      />
    </Map>
  );
}

export default MapRangeWithOutMarker;
