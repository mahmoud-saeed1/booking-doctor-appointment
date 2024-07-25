import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import NavLinks from "../NavLinks";
import "./index.css";

const Header = () => {
  return (
    <header className="header container">
      <Image src={"/Logo.svg"} alt="Logo" width={180} height={80} />
      <NavLinks className="hidden md:flex"/>
      <Button>get started</Button>
    </header>
  );
};

export default Header;
