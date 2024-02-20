import { Autocomplete, TextField } from "@mui/material";
import { FC, SyntheticEvent } from "react";

type Props = {
  options: string[];
  label: string;
  value: string | null;
  onChange: (event: SyntheticEvent<Element, Event>, newValue: string | null) => void;
};

const SearchInput: FC<Props> = ({ options, label, value, onChange }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Autocomplete value={value} onChange={onChange} options={options} renderInput={(params) => <TextField {...params} label={label} />} />
  );
};
export default SearchInput;
