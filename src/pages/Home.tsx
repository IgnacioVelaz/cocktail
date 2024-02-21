import { Container } from "@mui/material";
import { useState } from "react";
import { SearchForm } from "../components/search-form";
import { CoctailsList } from "../components/cocktails-list";
import { IntroText } from "./styled";

const HomePage = () => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <Container>
      <IntroText variant="h2">Select an ingredient and find some cocktails you&apos;ll like</IntroText>
      <SearchForm inputValue={inputValue} setInputValue={setInputValue} />
      <CoctailsList setInputValue={setInputValue} />
    </Container>
  );
};
export default HomePage;
