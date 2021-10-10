import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Searchbar from "./Searchbar";
import ResultList from "./ResultList";
import Pagination from "./Pagination";
import useTopics from "../hooks/useTopics";
import usePagination from "../hooks/usePagination";

const defaultPage = 1;
const defaultSearchTerm = "react";
const numOfPages = 5;

export default function TopicExplorer() {
  const [page, setPage] = usePagination(defaultPage);
  const [searchTerm, setSearchTerm] = useState(defaultSearchTerm);
  const [topics, totalCount, isLoading, errorMsg, fetchTopics] = useTopics();

  const handlePageChange = (newPage) => {
    setPage(newPage);
    fetchTopics({ page: newPage, search: searchTerm });
  };

  const handleSearch = () => {
    setPage(defaultPage);
    setSearchTerm(searchTerm);
    fetchTopics({ page: defaultPage, search: searchTerm });
  };

  const handleSearchTermChange = (newSearchTerm) =>
    setSearchTerm(newSearchTerm);

  useEffect(() => fetchTopics({ page, search: searchTerm }), []);

  return (
    <Container>
      <h1 className="my-3">Github Topic Explorer</h1>
      <Searchbar
        term={searchTerm}
        handleTermChange={handleSearchTermChange}
        handleSearch={handleSearch}
      />
      <ResultList
        items={topics}
        totalCount={totalCount}
        isLoading={isLoading}
        errorMsg={errorMsg}
      />
      <Pagination
        activePage={page}
        numOfPages={numOfPages}
        handlePageChange={handlePageChange}
      />
    </Container>
  );
}
