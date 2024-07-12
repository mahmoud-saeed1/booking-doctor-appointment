import { Button } from "@/components/ui/button";
import React from "react";
interface IPaginationControls {
  className?: string;
  paginate: (value: number) => void;
}

const PaginationControls = ({ className, paginate }: IPaginationControls) => {
  return (
    <div className={`${className} p-4 flex items-center justify-between`}>
      <Button onClick={() => paginate(-1)}>←</Button>
      <Button onClick={() => paginate(1)}>→</Button>
    </div>
  );
};

export default PaginationControls;
