import { Dispatch, FC, SetStateAction, SyntheticEvent, useEffect, useMemo } from "react";
import { CircularProgress } from "@mui/material";
import { SearchInput } from "../search-input";
import { dataToIngredients } from "../../adapters";
import { useAxiosFetch } from "../../hooks";
import { IngredientsData } from "../../models/ingredient.model";
import useSearchParams from "../../hooks/useSearchParams";

type AxiosFetchReturn = {
  data: IngredientsData | null;
  isError: boolean;
  isLoading: boolean;
};

type Props = {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
};

const SearchForm: FC<Props> = ({ inputValue, setInputValue }) => {
  const { data, isError, isLoading }: AxiosFetchReturn = useAxiosFetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");
  const [searchParams, setSearchParams] = useSearchParams();

  const ingredients = useMemo(() => (data ? dataToIngredients(data) : []), [data]);

  useEffect(() => {
    setInputValue(searchParams.get("q") || "");
  }, [searchParams]);

  const onChange = (_event: SyntheticEvent<Element, Event>, newValue: string | null) => {
    if (newValue) {
      setInputValue(newValue);
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("q", newValue);
      setSearchParams(newSearchParams);
    }
  };

  if (isLoading) return <CircularProgress />;
  if (isError) return null;

  return <SearchInput options={ingredients} label="Ingredient" onChange={onChange} value={inputValue} />;
};

export default SearchForm;
