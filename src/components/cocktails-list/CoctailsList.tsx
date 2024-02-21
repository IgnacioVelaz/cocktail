import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import useSearchParams from "../../hooks/useSearchParams";
import { getCocktailEndpoints, getCocktailIds, getQueryFromArg } from "../../adapters";
import { useAxiosFetch } from "../../hooks";
import { getCocktailsDetails } from "../../adapters/cocktailDetails.adapter";
import { sortByAlcohol } from "../../utilities/sortByAlcohol";
import { filterByMaxIngredients } from "../../utilities";
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
    const getCocktailsData = async () => {
      if (!data) return;
      const firstTenCocktails = data.drinks.slice(0, 10);
      const endpoints = getCocktailEndpoints(getCocktailIds(firstTenCocktails));
      const cocktailsData = await axios.all(endpoints.map((endpoint) => axios.get(endpoint)));
      if (!cocktailsData) return;
      const filteredCoctails = filterByMaxIngredients(cocktailsData, 6);
      const cocktailsDetails = getCocktailsDetails(filteredCoctails);
      const sortedCocktailsDetails = sortByAlcohol(cocktailsDetails);
      const firstSixCocktails = sortedCocktailsDetails.slice(0, 6);
      setCocktails(firstSixCocktails);
    };
    getCocktailsData();
  }, [data]);

  if (isLoading) return <CircularProgress />;
  if (isError) return null;

  return <div>CoctailsList: {JSON.stringify(cocktails)}</div>;
};

export default CoctailsList;
