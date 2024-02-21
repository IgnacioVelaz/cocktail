import { Button, Card, Typography, styled } from "@mui/material";

export const StyledCocktailItem = styled(Card)(() => ({
  height: "100%",
  width: "100%",
  paddingInline: "1em",
  backgroundColor: "var(--clr-primary)",
  color: "var(--clr-text-secondary)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

export const CocktailName = styled(Typography)(() => ({
  fontSize: "1.75rem !important",
  textTransform: "uppercase",
  fontWeight: "500",
  textAlign: "center",
}));

export const BasicHeading = styled(Typography)(() => ({
  fontSize: "1.25rem !important",
  textTransform: "uppercase",
}));

export const CocktailNameBox = styled(Typography)(() => ({
  minHeight: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const InstructionsButton = styled(Button)(() => ({
  marginInline: "auto",
  marginTop: "auto",
}));
