import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import useSearchParams from "../../hooks/useSearchParams";
import { getQueryFromArg } from "../../adapters";
import { useAxiosFetch } from "../../hooks";
import { getCocktailsData } from "../../utilities";
import { CocktailDetails, CocktailsByIngredientData } from "../../models";

type HistoryPath = {
  path: string;
};

const CoctailsList = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q"));
  const [cocktails, setCocktails] = useState<CocktailDetails[] | never[]>([]);

  /* eslint-disable no-restricted-globals */
  useEffect(() => {
    const { pushState } = history;

    history.pushState = (...args: [HistoryPath, string, string]) => {
      pushState.apply(history, args);
      if (!args[2]) return;
      setSearch(getQueryFromArg(args[2]));
    };
  }, [history]);
  /* eslint-enable no-restricted-globals */

  const URL = `https://thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`;
  const { data, isError, isLoading } = useAxiosFetch<CocktailsByIngredientData>(URL);

  useEffect(() => {
    if (!data) return;
    const setCocktailsData = async () => {
      const cocktailsData = await getCocktailsData(data);
      if (!cocktailsData) return;
      setCocktails(cocktailsData);
    };
    setCocktailsData();
  }, [data]);

  if (isLoading) return <CircularProgress />;
  if (isError) return null;

  return <div>CoctailsList: {JSON.stringify(cocktails)}</div>;
};

export default CoctailsList;
