"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedHour = currentTime.getHours().toString().padStart(2, "0");
  const formattedMin = currentTime.getMinutes().toString().padStart(2, "0");
  return (
    <header className="flex justify-between w-full items-center h-[50px] bg-gray-200">
      <p className="font-bold text-sm ml-[10px]">
        <span>{formattedHour}</span> : <span>{formattedMin}</span>
      </p>
      <Image
        src={`images/HeaderBattery.svg`}
        alt="Header Battery"
        width={79}
        height={13}
        className="mr-[10px]"
      />
    </header>
  );
}

export default Header;
