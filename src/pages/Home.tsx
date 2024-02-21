import { Container } from "@mui/material";
import { SearchForm } from "../components/search-form";
import { CoctailsList } from "../components/cocktails-list";
import { IntroText } from "./styled";

const HomePage = () => {
  return (
    <Container>
      <IntroText variant="h2">Select an ingredient and find some cocktails you&apos;ll like</IntroText>
      <SearchForm />
      <CoctailsList />
    </Container>
  );
};
export default HomePage;
