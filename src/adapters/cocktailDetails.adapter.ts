import { CocktailDetailResponse } from "../models";

export const getCocktailsDetails = (cocktailsData: CocktailDetailResponse[]) => {
  const cocktailsDetails = cocktailsData.map((cocktail) => {
    const cocktailData = cocktail.data.drinks[0];
    const {
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strDrink,
      strAlcoholic,
      strDrinkThumb,
      strInstructions,
    } = cocktailData;
    const cocktailDetails = {
      ingredient1: strIngredient1,
      ingredient2: strIngredient2,
      ingredient3: strIngredient3,
      ingredient4: strIngredient4,
      ingredient5: strIngredient5,
      ingredient6: strIngredient6,
      name: strDrink,
      isAlcoholic: strAlcoholic === "Alcoholic",
      thumbnailURL: strDrinkThumb,
      instructions: strInstructions,
    };
    return cocktailDetails;
  });

  return cocktailsDetails;
};
