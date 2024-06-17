import React, { useState } from "react";
import { FloatingNav } from "./ui/floating-navbar";

export function Navbar() {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Contact",
      link: "#skills",
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav
        navItems={navItems}
        clickedIndex={clickedIndex}
        setClickedIndex={setClickedIndex}
      />
    </div>
  );
}
