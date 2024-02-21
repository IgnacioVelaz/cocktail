import { Box, Button, Card, ListItemText, Typography, styled } from "@mui/material";

export const StyledCocktailItem = styled(Card)(() => ({
  height: "100%",
  width: "100%",
  paddingInline: "1em",
  paddingBottom: "1em",
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

export const CocktailNameBox = styled(Box)(() => ({
  minHeight: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "1em",
}));

export const InstructionsButton = styled(Button)(() => ({
  marginInline: "auto",
  marginTop: "auto",
}));

export const ClickableListItem = styled(ListItemText)(() => ({
  textDecoration: "underline",
  cursor: "pointer",
}));
