import { useEffect, useState } from "react";

const useSearchParams = (): [URLSearchParams, (newSearchParams: URLSearchParams) => void] => {
  const [searchParams, setSearchParams] = useState(new URLSearchParams(window.location.search));

  useEffect(() => {
    const handlePopState = () => {
      setSearchParams(new URLSearchParams(window.location.search));
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const updateSearchParams = (newSearchParams: URLSearchParams) => {
    const currentUrl = new URL(window.location.href);
    currentUrl.search = newSearchParams.toString();
    window.history.pushState({ path: currentUrl.href }, "", currentUrl.href);
    setSearchParams(newSearchParams);
  };

  return [searchParams, updateSearchParams];
};

export default useSearchParams;
