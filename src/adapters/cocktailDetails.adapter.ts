import { CocktailDetailResponse } from "../models";

export const getCocktailsDetails = (cocktailsData: CocktailDetailResponse[]) => {
  const cocktailsDetails = cocktailsData.map((cocktail) => {
    const cocktailData = cocktail.data.drinks[0];
    const { strDrink, strAlcoholic, strDrinkThumb, strInstructions } = cocktailData;

    const ingredients = Object.keys(cocktailData)
      .filter((key) => key.includes("strIngredient"))
      .map((key) => cocktailData[key])
      .filter((ingredient) => !!ingredient);

    const cocktailDetails = {
      name: strDrink,
      ingredients,
      isAlcoholic: strAlcoholic === "Alcoholic",
      thumbnailURL: strDrinkThumb,
      instructions: strInstructions,
    };
    return cocktailDetails;
  });

  return cocktailsDetails;
};
