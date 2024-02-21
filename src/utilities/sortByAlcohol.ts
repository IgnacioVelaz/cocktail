export const sortByAlcohol = (array: CocktailDetails[]) => {
  return array.sort((a, b) => {
    if (!a.isAlcoholic && b.isAlcoholic) {
      return -1;
    }
    if (a.isAlcoholic && !b.isAlcoholic) {
      return 1;
    }
    return 0;
  });
};
