import React, { ReactNode } from "react";
import CategoryList from "./_components/CategoryList";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="container grid grid-cols-4">
      <aside className="hidden md:block">
        <CategoryList />
      </aside>
      <div className="col-span-4 md:col-span-3">{children}</div>
    </section>
  );
};

export default Layout;
