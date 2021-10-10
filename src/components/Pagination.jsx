import React from "react";
import BootstrapPagination from "react-bootstrap/Pagination";
import PaginationItem from "./PaginationItem";

export default function Pagination(props) {
  const { numOfPages, activePage, handlePageChange } = props;

  const handleClickOnPrev = () => {
    const prevPage = activePage > 1 ? activePage - 1 : activePage;
    handlePageChange(prevPage);
  };

  const handleClickONext = () => {
    const nextPage = activePage < numOfPages ? activePage + 1 : activePage;
    handlePageChange(nextPage);
  };

  return (
    <BootstrapPagination className="justify-content-center">
      <BootstrapPagination.Prev onClick={handleClickOnPrev} />
      {Array(numOfPages)
        .fill()
        .map((_, index) => {
          const pageNumber = index + 1;
          return (
            <PaginationItem
              key={pageNumber}
              pageNumber={pageNumber}
              activePage={activePage}
              onClick={() => handlePageChange(pageNumber)}
            />
          );
        })}
      <BootstrapPagination.Ellipsis disabled />
      <BootstrapPagination.Next onClick={handleClickONext} />
    </BootstrapPagination>
  );
}
