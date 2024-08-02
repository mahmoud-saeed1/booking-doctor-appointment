import React from "react";
import Image from "next/image";
import NavLinks from "../NavLinks";
import MobileMenu from "../MobileMenu";
import "./index.css";

const Header = () => {
  return (
    <header className="header__container container">
      <Image src={"/Logo.svg"} alt="Logo" width={180} height={80} priority/>
      <NavLinks className="hidden md:flex" />
      <MobileMenu />
    </header>
  );
};

export default Header;
