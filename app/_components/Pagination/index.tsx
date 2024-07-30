import { useState } from "react";
import PaginatedContent from "../PaginatedContent";
import PaginationControls from "../PaginationControls";
import "./index.css";
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
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  return (
    <div className="pagination-container">
      <PaginatedContent data={paginatedData} component={component} />
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Pagination;
