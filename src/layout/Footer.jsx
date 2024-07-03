import React from "react";

function Footer() {
  const FooterItem = [
    {
      key: "1",
      menu: "menu1",
    },
    {
      key: "2",
      menu: "menu2",
    },
    {
      key: "3",
      menu: "menu3",
    },
  ];

  return (
    <footer className="h-[54px] fixed left-0 bottom-0 w-full">
      <ul className="flex items-center justify-between h-full border border-solid border-gray-400">
        {FooterItem.map((item) => (
          <li key={item.key}>{item.menu}</li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
