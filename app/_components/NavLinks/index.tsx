"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { LinksData } from "@/app/_data";
import Link from "next/link";
import "./index.css";

const NavLinks = ({ className }: { className?: string }) => {
  const currentPath = usePathname();

  /*~~~~~~~~$ Renders $~~~~~~~~*/
  const navLinksRendering = LinksData.map((link) => (
    <li key={link.id}>
      <Link
        href={link.path}
        className={`nav__link ${currentPath === link.path ? "active" : ""}`}
      >
        {link.title}
      </Link>
    </li>
  ));

  return (
    <nav>
      <ul className={`${className} links-container`}>{navLinksRendering}</ul>
    </nav>
  );
};

export default NavLinks;
