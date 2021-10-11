import { useState, useCallback } from "react";
import { getTopics } from "../apis/github/rest";

const useTopics = () => {
  const [items, setItems] = useState();
  const [totalItems, setTotalItems] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState();

  const fetchItems = useCallback(async ({ page, search }) => {
    try {
      setErrorMsg("");
      setIsLoading(true);
      const response = await getTopics({ page, search });
      const items = response?.data?.items;
      const totalItems = response?.data?.total_count;
      setItems(items);
      setTotalItems(totalItems);
    } catch (err) {
      const errorMsg = err?.response?.data?.message;
      setErrorMsg(errorMsg);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [items, totalItems, isLoading, errorMsg, fetchItems];
};

export default useTopics;
