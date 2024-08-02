import React from "react";
import Image from "next/image";
import "./index.css";

export const Logo = () => {
  return (
    <div className="logo-container">
      <Image src={"/Logo.svg"} alt="Logo" width={180} height={80} priority />
    </div>
  );
};
