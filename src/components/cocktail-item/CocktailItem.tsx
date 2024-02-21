import { Box, CardActions, CardContent, Grid, List, ListItem, Typography } from "@mui/material";
import { FC } from "react";
import { nanoid } from "nanoid";
import { CocktailDetails } from "../../models";
import { BasicHeading, ClickableListItem, CocktailName, CocktailNameBox, InstructionsButton, StyledCocktailItem } from "./styled";
import useSearchParams from "../../hooks/useSearchParams";

type Props = {
  data: CocktailDetails;
  openModal: (cocktail: CocktailDetails) => void;
};

const CocktailItem: FC<Props> = ({ data, openModal }) => {
  const { name, ingredients, isAlcoholic, thumbnailURL } = data;
  const [searchParams, setSearchParams] = useSearchParams();

  const setNewIngredient = (ingredient: string) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("q", ingredient);
    setSearchParams(newSearchParams);
  };

  const isAlcoholicText = isAlcoholic ? "Contains alcohol" : "0% Alcohol";

  return (
    <StyledCocktailItem key={nanoid()}>
      <CardContent>
        <CocktailNameBox>
          <CocktailName variant="h2">{name}</CocktailName>
        </CocktailNameBox>
        <Box>
          <Grid container>
            <Grid item xs={6}>
              <BasicHeading variant="h3">Ingredients</BasicHeading>
              <List dense>
                {ingredients.map((ingredient) => (
                  <ListItem key={nanoid()}>
                    <ClickableListItem role="button" onClick={() => setNewIngredient(ingredient)}>
                      {ingredient}
                    </ClickableListItem>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={6} sm={12} md={6} sx={{ textAlign: "center" }}>
              <Box component="img" alt={name} src={thumbnailURL} />
              <Typography color="secondary">{isAlcoholicText}</Typography>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <CardActions>
        <InstructionsButton variant="contained" size="small" onClick={() => openModal(data)}>
          Read Instructions
        </InstructionsButton>
      </CardActions>
    </StyledCocktailItem>
  );
};
export default CocktailItem;
