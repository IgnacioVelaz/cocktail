import { CocktailByingredient } from "../models";

export const getCocktailIds = (drinks: CocktailByingredient[]) => {
  return drinks.map((drink) => drink.idDrink);
};

export const getCocktailEndpoints = (cockTailIds: string[]) => {
  return cockTailIds.map((cocktailId) => `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`);
};
