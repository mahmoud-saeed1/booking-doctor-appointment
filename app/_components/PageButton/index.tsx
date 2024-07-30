import React from "react";
import { Button } from "@/components/ui/button";
import "./index.css";

interface PageButtonProps {
  page: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PageButton: React.FC<PageButtonProps> = ({ page, currentPage, onPageChange }) => {
  return (
    <Button
      onClick={() => onPageChange(page)}
      className={`page-button ${currentPage === page ? "page-button--active" : "page-button--inactive"}`}
    >
      {page}
    </Button>
  );
};

export default PageButton;
