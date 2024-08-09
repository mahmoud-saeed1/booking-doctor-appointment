"use client";
import React, { ReactNode, useState } from "react";
import CategoryList from "./_components/CategoryList";
import { Button } from "@/components/ui/button";
import IconContainer from "@/app/_components/IconContainer";
import { Search } from "@/app/_icons";
import { X } from "lucide-react";

const Layout = ({ children }: { children: ReactNode }) => {
  const [isAsideVisible, setAsideVisible] = useState(false);

  const toggleAside = () => {
    setAsideVisible((prev) => !prev);
  };

  const closeAside = () => {
    setAsideVisible(false);
  };

  return (
    <section className="container grid grid-cols-4">
      {/*~~~~~~~~$ Mobile Trigger Button $~~~~~~~~*/}
      <Button
        className="block md:hidden fixed top-[15%] right-4 p-2 bg-primary rounded-xl text-white z-50 animate-bounce"
        onClick={toggleAside}
      >
        <span className="sr-only">Toggle Menu</span>
        <IconContainer>
          <Search />
        </IconContainer>
      </Button>

      {/*~~~~~~~~$ Mobile Aside $~~~~~~~~*/}
      <aside
        className={`fixed inset-0 bg-white shadow-lg transition-transform transform z-50 ${
          isAsideVisible ? "translate-x-1/4 sm:translate-x-1/2" : "translate-x-full"
        } md:hidden`}
      >
        <X
          className="h-10 w-10 text-primary rounded-full absolute top-4 left-4 cursor-pointer"
          style={{ border: "3px solid #1d4ed8" }}
          onClick={closeAside}
        />
        <div className="translate-y-10">
          <CategoryList closeAside={closeAside} />
        </div>
      </aside>

      {/*~~~~~~~~$ Desktop Aside $~~~~~~~~*/}
      <aside className="hidden md:block">
        <CategoryList />
      </aside>

      {/*~~~~~~~~$ Main Conten $~~~~~~~~*/}
      <div className="col-span-4 md:col-span-3" onClick={closeAside}>
        {children}
      </div>
    </section>
  );
};

export default Layout;
