import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosFetch = (dataUrl: string) => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async (url: string) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, {
          cancelToken: source.token,
        });
        if (isMounted) {
          setData(response.data);
          setIsError(false);
        }
      } catch (err) {
        if (isMounted) {
          setIsError(true);
          setData([]);
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchData(dataUrl);

    const cleanUp = () => {
      isMounted = false;
      source.cancel();
    };

    return cleanUp;
  }, [dataUrl]);

  return { data, isError, isLoading };
};

export default useAxiosFetch;
