import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5e62d1",
    },
    secondary: {
      main: "#e0e2ee",
    },
    background: {
      default: "#fff",
    },
    text: {
      primary: "#333",
      secondary: "#666",
    },
    divider: "#666",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#e0e2ee",
          color: "#5e62d1",
          padding: "1em 2em",
          boxShadow: "none",
          border: "none",
          "&:hover": {
            backgroundColor: "#f0f1f6",
          },
        },
        text: {
          color: "inherit",
          textTransform: "none",
          padding: "0",
          textAlign: "left",
          width: "fit-content",
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
