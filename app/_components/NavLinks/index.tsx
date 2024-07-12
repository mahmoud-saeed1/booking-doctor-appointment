import React from "react";
import { LinksData } from "@/app/_data";
import Link from "next/link";
import "./index.css";

const NavLinks = ({ className }: { className?: string }) => {
  /*~~~~~~~~$ Renders $~~~~~~~~*/
  const navLinksRendering = LinksData.map((link) => (
    <li key={link.id}>
      <Link href={link.path} className="nav__link">
        {link.title}
      </Link>
    </li>
  ));

  return (
    <nav>
      <ul className={`${className}`}>{navLinksRendering}</ul>
    </nav>
  );
};

export default NavLinks;
