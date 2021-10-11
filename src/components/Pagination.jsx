import React from "react";
import PropTypes from "prop-types";
import BootstrapPagination from "react-bootstrap/Pagination";
import PaginationItem from "./PaginationItem";

function Pagination(props) {
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

Pagination.propTypes = {
  numOfPages: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export default Pagination;
