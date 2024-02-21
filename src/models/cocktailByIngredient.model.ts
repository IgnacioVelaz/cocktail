export type CocktailByingredient = {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
};

export type CocktailsByIngredientData = {
  drinks: CocktailByingredient[];
};
