import { Button } from "@/components/ui/button";
import React from "react";
import "./index.css"

interface IPaginationControls {
  className?: string;
  paginate: (value: number) => void;
}

const PaginationControls = ({ className, paginate }: IPaginationControls) => {
  return (
    <div className={`${className} .pagination-controls`}>
      <Button onClick={() => paginate(-1)}>←</Button>
      <Button onClick={() => paginate(1)}>→</Button>
    </div>
  );
};

export default PaginationControls;
