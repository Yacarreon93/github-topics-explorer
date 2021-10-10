import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Searchbar from "./Searchbar";
import ResultList from "./ResultList";
import Pagination from "./Pagination";
import useTopics from "../hooks/useTopics";
import usePagination from "../hooks/usePagination";

const numOfPages = 5;

export default function TopicExplorer() {
  const [page, setPage] = usePagination();

  const handlePageChange = (pageToGo) => setPage(pageToGo);

  const [topics, totalCount, isLoading, fetchTopics] = useTopics();

  useEffect(() => fetchTopics({ page }), [page, fetchTopics]);

  return (
    <Container>
      <h1 className="my-3">Github Topic Explorer</h1>
      <Searchbar />
      <ResultList
        items={topics}
        totalCount={totalCount}
        isLoading={isLoading}
      />
      <Pagination
        activePage={page}
        numOfPages={numOfPages}
        handlePageChange={handlePageChange}
      />
    </Container>
  );
}
