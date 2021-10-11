import { useState, useCallback } from "react";
import { getTopics } from "../apis/github/rest";

const defaultTopics = [];
const defaultTotalCount = 0;
const deaultIsLoading = false;
const deaultErrorMsg = "";

const useTopics = () => {
  const [topics, setTopics] = useState(defaultTopics);
  const [totalCount, setTotalCount] = useState(defaultTotalCount);
  const [isLoading, setIsLoading] = useState(deaultIsLoading);
  const [errorMsg, setErrorMsg] = useState(deaultErrorMsg);

  const fetchItems = useCallback(async ({ page, search }) => {
    try {
      setTopics(defaultTopics);
      setTotalCount(defaultTotalCount);
      setErrorMsg(deaultErrorMsg);
      setIsLoading(true);
      const response = await getTopics({ page, search });
      const topics = response?.data?.items;
      const totalCount = response?.data?.total_count;
      setTopics(topics);
      setTotalCount(totalCount);
    } catch (err) {
      const errorMsg = err?.response?.data?.message;
      setErrorMsg(errorMsg);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [topics, totalCount, isLoading, errorMsg, fetchItems];
};

export default useTopics;
