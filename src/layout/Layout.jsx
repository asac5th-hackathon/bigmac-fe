import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HeaderName from "./HeaderName";
import Button from "@/app/components/Button";

function Layout({ children }) {
  return (
    <div className="mw-[430px] w-full h-full flex flex-col">
      <Header />
      <main className="mx-5">
        <HeaderName title={"반경 설정"} leftChild={<Button text={"<"} />} />
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
export default Layout;
