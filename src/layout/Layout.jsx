"use client";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HeaderName from "./HeaderName";
import Button from "@/components/Button";
import { usePathname } from "next/navigation";

function Layout({ children }) {
  const routeTitles = {
    "/": "주소 검색",
    "/Radius": "반경 설정",
    "/main": "카테고리 설정",
  };

  const pathname = usePathname();
  const title = routeTitles[pathname] || "";

  return (
    <div className="mw-[430px] w-full h-full flex flex-col">
      <Header />
      <main className="mx-5">
        <HeaderName title={title} leftChild={<Button text={"<"} />} />
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
export default Layout;
