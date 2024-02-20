import { SyntheticEvent, useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { SearchInput } from "../search-input";
import { dataToIngredients } from "../../adapters";
import { useAxiosFetch } from "../../hooks";
import { IngredientsData } from "../../models/ingredient.model";

type AxiosFetchReturn = {
  data: IngredientsData | null;
  isError: boolean;
  isLoading: boolean;
};

const SearchForm = () => {
  const { data, isError, isLoading }: AxiosFetchReturn = useAxiosFetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string | null>(null);

  useEffect(() => {
    if (data) {
      const ingredientsFromData = dataToIngredients(data);
      setIngredients(ingredientsFromData);
    }
  }, [data]);

  const onChange = (event: SyntheticEvent<Element, Event>, newValue: string | null) => setInputValue(newValue);

  if (isLoading) return <CircularProgress />;
  if (isError) return null;

  return <SearchInput options={ingredients} label="Ingredient" onChange={onChange} value={inputValue} />;
};

export default SearchForm;
