import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="mw-[430px] w-full h-full flex flex-col">
      <Header />
      <main className="mx-5">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
