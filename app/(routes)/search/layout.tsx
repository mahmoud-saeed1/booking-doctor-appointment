import React, { ReactNode } from "react";
import CategoryList from "./_components/CategoryList";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-4">
      <aside>
        <CategoryList />
      </aside>
      <div className="col-span-3">{children}</div>
    </div>
  );
};

export default Layout;
