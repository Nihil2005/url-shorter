// src/hooks/use-fetch.js

import { useState } from 'react';

const useFetch = (fetchFn, params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await fetchFn(params);
      setData(result.data); // Assuming result has a 'data' property
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};

export default useFetch;
