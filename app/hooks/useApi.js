import { useState } from "react";

const useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const request = async (...args) => {
    setIsLoading(true);
    const response = await apiFunc(...args);
    setIsLoading(false);

    if (!response.ok) {
      return setError(true);
    }

    setError(false);
    setData(response.data);
  };

  return { data, error, isLoading, request };
};

export default useApi;
