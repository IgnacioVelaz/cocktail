import { Container } from "@mui/material";
import { SearchForm } from "../components/search-form";
import { CoctailsList } from "../components/cocktails-list";

const HomePage = () => {
  return (
    <Container>
      <SearchForm />
      <CoctailsList />
    </Container>
  );
};
export default HomePage;
