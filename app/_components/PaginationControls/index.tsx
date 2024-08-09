import React from "react";
import { motion } from "framer-motion";
import IconContainer from "../IconContainer";
import { Arrow } from "@/app/_icons";
import { Button } from "@/components/ui/button";
import PageButton from "../PageButton";
import "./index.css";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getVisiblePageNumbers = () => {
    const maxVisiblePages = 3;
    const pages: (number | string)[] = [];

    if (totalPages <= maxVisiblePages + 1) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= Math.ceil(maxVisiblePages / 2)) {
        for (let i = 1; i <= maxVisiblePages; i++) {
          pages.push(i);
        }
        pages.push("...");
      } else if (currentPage > totalPages - Math.floor(maxVisiblePages / 2)) {
        pages.push("...");
        for (let i = totalPages - maxVisiblePages + 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push("...");
        for (
          let i = currentPage - Math.floor(maxVisiblePages / 2);
          i <= currentPage + Math.floor(maxVisiblePages / 2);
          i++
        ) {
          pages.push(i);
        }
        pages.push("...");
      }
    }

    return pages;
  };

  const visiblePageNumbers = getVisiblePageNumbers();

  return (
    <div className="pagination-controls">
      <Button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className="pagination-controls__button pagination-controls__button--prev"
        aria-label="Previous page"
      >
        <IconContainer>
          <Arrow className="scale-100" />
        </IconContainer>
      </Button>
      {visiblePageNumbers.map((page, index) => (
        <div key={index}>
          {page === "..." ? (
            <span className="pagination-controls__ellipsis">...</span>
          ) : (
            <motion.div
              initial={{ opacity: 0.5 }}
              animate={{ opacity: currentPage === page ? 1 : 0.5 }}
              transition={{ duration: 0.3 }}
              >
              <PageButton
                page={page as number}
                currentPage={currentPage}
                onPageChange={onPageChange}
              />
            </motion.div>
          )}
        </div>
      ))}
      <Button
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        className="pagination-controls__button pagination-controls__button--next"
        aria-label="Next page"
      >
        <IconContainer>
          <Arrow className="scale-100 rotate-180" />
        </IconContainer>
      </Button>
    </div>
  );
};

export default PaginationControls;
