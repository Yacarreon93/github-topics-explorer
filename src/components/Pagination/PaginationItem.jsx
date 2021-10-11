import React from "react";
import PropTypes from "prop-types";
import BootstrapPagination from "react-bootstrap/Pagination";

function PaginationItem(props) {
  const { pageNumber, activePage, onClick } = props;

  const isActive = pageNumber === activePage;

  return (
    <BootstrapPagination.Item active={isActive} onClick={onClick}>
      {pageNumber}
    </BootstrapPagination.Item>
  );
}

PaginationItem.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PaginationItem;
