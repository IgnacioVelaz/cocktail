import { Box, CardActions, CardContent, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { FC } from "react";
import { CocktailDetails } from "../../models";
import { BasicHeading, CocktailName, CocktailNameBox, InstructionsButton, StyledCocktailItem } from "./CocktailItem.styles";

type Props = {
  data: CocktailDetails;
};

const CocktailItem: FC<Props> = ({ data }) => {
  const { name, ingredients, isAlcoholic, thumbnailURL } = data;

  const isAlcoholicText = isAlcoholic ? "Contains alcohol" : "0% Alcohol";

  return (
    <StyledCocktailItem key={name}>
      <CardContent>
        <CocktailNameBox>
          <CocktailName variant="h2">{name}</CocktailName>
        </CocktailNameBox>
        {/* <img src={thumbnailURL} alt={name} /> */}
        <Box>
          <Grid container>
            <Grid item md={6}>
              <BasicHeading variant="h3">Ingredients</BasicHeading>
              <List dense>
                {ingredients.map((ingredient) => (
                  <ListItem>
                    <ListItemText>{ingredient}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item md={6}>
              <Box component="img" alt={name} src={thumbnailURL} />
              <Typography>{isAlcoholicText}</Typography>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <CardActions>
        <InstructionsButton variant="contained" size="small">
          Preparation Instructions
        </InstructionsButton>
      </CardActions>
    </StyledCocktailItem>
  );
};
export default CocktailItem;
