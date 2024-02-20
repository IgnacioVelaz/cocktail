import { IngredientsData } from "../models/ingredient.model";

export const dataToIngredients = (data: IngredientsData) => {
  return data.drinks.map((drink) => drink.strIngredient1);
};
