import React, { useEffect, useState, useMemo } from "react";
import Container from "react-bootstrap/Container";
import debounce from "lodash.debounce";
import Searchbar from "./Searchbar";
import ResultList from "./ResultList";
import Pagination from "./Pagination";
import useTopics from "../hooks/useTopics";
import usePagination from "../hooks/usePagination";

const defaultPage = 1;
const defaultSearchTerm = "react";
const defaultApiParams = { page: defaultPage, search: defaultSearchTerm };
const numOfPages = 5;

export default function TopicExplorer() {
  const [page, setPage] = usePagination(defaultPage);
  const [searchTerm, setSearchTerm] = useState(defaultSearchTerm);
  const [apiParams, setApiParams] = useState(defaultApiParams);
  const [topics, totalCount, isLoading, errorMsg, fetchTopics] = useTopics();

  const debouncedSetApiParams = useMemo(
    () =>
      debounce((newApiParams) => {
        setPage(newApiParams.page);
        setApiParams(newApiParams);
      }, 500),
    [setPage]
  );

  const handlePageChange = (newPage) => {
    setPage(newPage);
    setApiParams({ page: newPage, search: searchTerm });
  };

  const handleSearchTermChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
    debouncedSetApiParams({ page: defaultPage, search: newSearchTerm });
  };

  const handleClickOnSearch = () => {
    setPage(defaultPage);
    setApiParams({ page: defaultPage, search: searchTerm });
  };

  useEffect(() => {
    fetchTopics(apiParams);
  }, [apiParams, fetchTopics]);

  return (
    <Container>
      <h1 className="my-3">Github Topic Explorer</h1>
      <Searchbar
        term={searchTerm}
        handleTermChange={handleSearchTermChange}
        handleClickOnSearch={handleClickOnSearch}
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
