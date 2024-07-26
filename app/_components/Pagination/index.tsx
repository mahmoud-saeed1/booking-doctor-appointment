import { useState } from "react";
import { motion } from "framer-motion";
import IconContainer from "../IconContainer";
import { Arrow } from "@/app/_icons";
import { Button } from "@/components/ui/button";

/*~~~~~~~~$ Pagination Component $~~~~~~~~*/
interface PaginationProps<T> {
  data: T[];
  component: (item: T) => JSX.Element;
  itemsPerPage: number;
}

const Pagination = <T,>({
  data,
  component,
  itemsPerPage,
}: PaginationProps<T>) => {
  /*~~~~~~~~$ States $~~~~~~~~*/
  const [currentPage, setCurrentPage] = useState(1);

  /*~~~~~~~~$ Handlers $~~~~~~~~*/
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  /*~~~~~~~~$ Calculations $~~~~~~~~*/
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  /*~~~~~~~~$ Helper Functions $~~~~~~~~*/
  const getVisiblePageNumbers = () => {
    const maxVisiblePages = 3; // Number of visible pages + ellipses
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

  /*~~~~~~~~$ Render $~~~~~~~~*/
  return (
    <div>
      <div className="paginated-content mt-40 grid grid-cols-6 gap-y-28 gap-x-0 place-items-center sm:gap-x-14 xl:gap-y-40">
        {paginatedData.map((item, index) => (
          <div key={index} className="col-span-6 sm:col-span-3 lg:col-span-2">
            {component(item)}
          </div>
        ))}
      </div>

      {/*~~~~~~~~$ Pagination Controls $~~~~~~~~*/}
      <div className="pagination-controls flex items-center justify-center space-x-2 mt-8">
        <Button
          onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
          className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition-colors"
        >
          <IconContainer>
            <Arrow className="scale-100"/>
          </IconContainer>
        </Button>
        {visiblePageNumbers.map((page, index) => (
          <div key={index}>
            {page === "..." ? (
              <span className="bg-gray-300 text-gray-700 rounded-full px-3 py-1">
                ...
              </span>
            ) : (
              <motion.div
                initial={{ opacity: 0.5 }}
                animate={{ opacity: currentPage === page ? 1 : 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  onClick={() => handlePageChange(page as number)}
                  className={`px-3 py-1 rounded-full ${
                    currentPage === page
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  } hover:bg-blue-400 hover:text-white transition-colors`}
                >
                  {page}
                </Button>
              </motion.div>
            )}
          </div>
        ))}
        <Button
          onClick={() =>
            currentPage < totalPages && handlePageChange(currentPage + 1)
          }
          className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition-colors"
        >
          <IconContainer>
            <Arrow className="scale-100 rotate-180" />
          </IconContainer>
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
