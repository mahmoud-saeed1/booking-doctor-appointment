import IconContainer from "@/app/_components/IconContainer";
import { AppLogo } from "@/app/_icons";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <IconContainer className="w-auto h-auto">
        <AppLogo />
      </IconContainer>
    </Link>
  );
};

export default Logo;
