import { useAxiosFetch } from "../hooks";
import { IngredientsData } from "../models/ingredient.model";

export const useGetIngredients = (): [IngredientsData, boolean, boolean] => {
  const { data, isError, isLoading } = useAxiosFetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");
  return [data as IngredientsData, isError, isLoading];
};
