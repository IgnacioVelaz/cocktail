import { Box, CardActions, CardContent, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { FC } from "react";
import { CocktailDetails } from "../../models";
import { BasicHeading, CocktailName, CocktailNameBox, InstructionsButton, StyledCocktailItem } from "./CocktailItem.styles";

type Props = {
  data: CocktailDetails;
  openModal: (cocktail: CocktailDetails) => void;
};

const CocktailItem: FC<Props> = ({ data, openModal }) => {
  const { name, ingredients, isAlcoholic, thumbnailURL } = data;

  const isAlcoholicText = isAlcoholic ? "Contains alcohol" : "0% Alcohol";

  return (
    <StyledCocktailItem key={name}>
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
                  <ListItem>
                    <ListItemText>{ingredient}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={6}>
              <Box component="img" alt={name} src={thumbnailURL} />
              <Typography>{isAlcoholicText}</Typography>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <CardActions>
        <InstructionsButton variant="contained" size="small" onClick={() => openModal(data)}>
          Preparation Instructions
        </InstructionsButton>
      </CardActions>
    </StyledCocktailItem>
  );
};
export default CocktailItem;
