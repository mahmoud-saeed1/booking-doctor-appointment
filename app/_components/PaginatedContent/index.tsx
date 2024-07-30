import React from "react";
import "./index.css";

interface PaginatedContentProps<T> {
  data: T[];
  component: (item: T) => JSX.Element;
}

const PaginatedContent = <T,>({ data, component }: PaginatedContentProps<T>) => {
  return (
    <div className="paginated-content">
      {data.map((item, index) => (
        <div key={index} className="paginated-content__item">
          {component(item)}
        </div>
      ))}
    </div>
  );
};

export default PaginatedContent;
