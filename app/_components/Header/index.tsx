"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import NavLinks from "../NavLinks";
import MobileMenu from "../MobileMenu";
import "./index.css";
import Logo from "../Logo";

const Header: React.FC = () => {
  /*~~~~~$ States $~~~~~*/
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isFixed, setIsFixed] = useState(false);

  /*~~~~~$ Effects $~~~~~*/
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Optimized scroll handling using requestAnimationFrame
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Header becomes visible when scrolling up or at the top of the page
          setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

          // Fix header position after scrolling past 100px
          setIsFixed(currentScrollPos > 100);

          setPrevScrollPos(currentScrollPos);
          ticking = false;
        });

        ticking = true;
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  /*~~~~~$ Renders $~~~~~*/
  return (
    <header
      className={`w-full z-50 shadow-md transition-all duration-300 ease-in-out ${
        visible ? "opacity-100" : "opacity-0 -translate-y-full"
      } ${isFixed ? "fixed bg-white top-0" : "relative bg-transparent"}`}
    >
      <nav className="container flex items-center justify-between py-4">
        {/*~~~~~$ Logo $~~~~~*/}
        <Logo />

        {/*~~~~~$ Navigation Links (Large Screens) $~~~~~*/}
        <NavLinks className="hidden md:flex" />

        {/*~~~~~$ Mobile Menu (Small Screens) $~~~~~*/}
        <MobileMenu className="md:hidden" />
      </nav>
    </header>
  );
};

export default Header;
