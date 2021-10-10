import React from "react";
import BootstrapPagination from "react-bootstrap/Pagination";

export default function PaginationItem(props) {
  const { pageNumber, activePage, onClick } = props;

  const isActive = pageNumber === activePage;

  return (
    <BootstrapPagination.Item active={isActive} onClick={onClick}>
      {pageNumber}
    </BootstrapPagination.Item>
  );
}
