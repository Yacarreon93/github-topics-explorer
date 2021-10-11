import { useState, useCallback } from "react";

const useGraphQLAPI = (service) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState();

  const fetchData = useCallback(
    async (...args) => {
      try {
        setErrorMsg("");
        setIsLoading(true);
        const response = await service(...args);
        const { data, errors } = response?.data;
        if (errors) setErrorMsg(errors[0].message);
        else setData(data);
      } catch (err) {
        const errorMsg = err?.response?.data?.message;
        setErrorMsg(errorMsg);
      } finally {
        setIsLoading(false);
      }
    },
    [service]
  );

  return [data, isLoading, errorMsg, fetchData];
};

export default useGraphQLAPI;
