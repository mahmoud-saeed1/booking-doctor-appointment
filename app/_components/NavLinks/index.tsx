import React from "react";
import { LinksData } from "@/app/data";
import Link from "next/link";
import "./index.css";

const NavLinks = ({ className }: { className?: string }) => {
  /*~~~~~~~~$ Renders $~~~~~~~~*/
  const navLinksRendering = LinksData.map((link) => (
    <li key={link.id} className="link">
      <Link href={link.path} className="link">
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
