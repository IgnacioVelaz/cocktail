import axios from "axios";
import { getCocktailEndpoints, getCocktailIds } from "../adapters";
import { filterByMaxIngredients } from "./filterByIngredients";
import { getCocktailsDetails } from "../adapters/cocktailDetails.adapter";
import { sortByAlcohol } from "./sortByAlcohol";
import { CocktailsByIngredientData } from "../models";

export const getCocktailsData = async (data: CocktailsByIngredientData) => {
  const firstTenCocktails = data.drinks.slice(0, 10);
  const endpoints = getCocktailEndpoints(getCocktailIds(firstTenCocktails));
  const cocktailsData = await axios.all(endpoints.map((endpoint) => axios.get(endpoint)));
  if (!cocktailsData) return null;
  const filteredCoctails = filterByMaxIngredients(cocktailsData, 6);
  const cocktailsDetails = getCocktailsDetails(filteredCoctails);
  const sortedCocktailsDetails = sortByAlcohol(cocktailsDetails);
  const firstSixCocktails = sortedCocktailsDetails.slice(0, 6);
  return firstSixCocktails;
};
