import { CocktailDetailResponse, Drink } from "../models";

type MaxIngredients = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;

export const filterByMaxIngredients = (array: CocktailDetailResponse[], max: MaxIngredients) => {
  return array.filter((item) => {
    const drink: Drink = item.data.drinks[0];
    return drink[`strIngredient${max + 1}`] === null;
  });
};
