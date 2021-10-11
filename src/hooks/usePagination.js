import { useState } from "react";

const defaultPage = 1;

const usePagination = () => {
  const [page, setPage] = useState(defaultPage);

  return [page, setPage];
};

export default usePagination;
