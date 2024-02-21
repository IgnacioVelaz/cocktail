import { Box, Typography, styled } from "@mui/material";

export const EmptyContainer = styled(Box)(() => ({
  margin: "auto",
  display: "flex",
  height: "50vh",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  textAlign: "center",
}));

export const EmptyTitle = styled(Typography)(() => ({
  fontSize: "1.5rem",
  fontWeight: "600",
}));
