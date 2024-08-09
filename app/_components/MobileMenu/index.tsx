"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import IconContainer from "../IconContainer";
import { MenuHamburger } from "@/app/_icons";
import NavLinks from "../NavLinks";
import Socials from "../Socials";
import { useState } from "react";

const MobileMenu = ({ className }: { className?: string }) => {
  const [open, setOpen] = useState(false);

  /*~~~~~~~~$ Handlers $~~~~~~~~*/
  const closeMobileMenuHandler = () => setOpen(false);
  return (
    <div className={`${className} md:hidden`}>
      <Sheet>
        {/*~~~~~~~~$ Mobile Hamburger Icon $~~~~~~~~*/}
        <SheetTrigger>
          <IconContainer className="w-10 h-10">
            <MenuHamburger />
          </IconContainer>
        </SheetTrigger>

        {/*~~~~~~~~$ Mobile Menu Content $~~~~~~~~*/}
        <SheetContent className="bg-white">
          <SheetHeader className="mt-[80%] flex flex-col items-center justify-center space-y-10">
            <SheetDescription>
              <NavLinks className="flex flex-col items-center justify-center space-x-0 space-y-10 text-xl" closeMobileMenuHandler={closeMobileMenuHandler}/>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
