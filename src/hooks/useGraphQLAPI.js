import { useState, useCallback } from "react";

const defaultData = null;
const defaultIsLoading = false;
const defaultErrorMsg = "";

const useGraphQLAPI = (service) => {
  const [data, setData] = useState(defaultData);
  const [isLoading, setIsLoading] = useState(defaultIsLoading);
  const [errorMsg, setErrorMsg] = useState(defaultErrorMsg);

  const fetchData = useCallback(
    async (...args) => {
      try {
        setData(defaultData);
        setErrorMsg(defaultErrorMsg);
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
