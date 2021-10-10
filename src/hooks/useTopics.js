import { useState, useCallback } from "react";
import { getTopics } from "../serivces/api";

const useTopics = () => {
  const [items, setItems] = useState();
  const [totalItems, setTotalItems] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchItems = useCallback(async (page) => {
    setIsLoading(true);
    const response = await getTopics(page);
    const items = response?.data?.items;
    const totalItems = response?.data?.total_count;
    setItems(items);
    setTotalItems(totalItems);
    setIsLoading(false);
  }, []);

  return [items, totalItems, isLoading, fetchItems];
};

export default useTopics;
