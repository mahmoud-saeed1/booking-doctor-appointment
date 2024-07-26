import React from "react";
import { ILinkButton } from "@/app/_interfaces";
import Link from "next/link";
import "./index.css";

const LinkButton = ({ className, label, path }: ILinkButton) => {
  return (
    <Link href={path} className={`${className} link`}>
      {label}
    </Link>
  );
};

export default LinkButton;
