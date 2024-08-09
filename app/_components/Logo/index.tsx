import IconContainer from "@/app/_components/IconContainer";
import { AppLogo } from "@/app/_icons";
import Link from "next/link";
import React from "react";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <Link href={"/"} aria-label="Navigate to the home page">
      <IconContainer className={`${className} w-auto h-auto`}>
        <AppLogo />
      </IconContainer>
    </Link>
  );
};

export default Logo;
