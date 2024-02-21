import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@mui/material";
import { SnackbarUtilitiesConfigurator } from "./utilities";
import { HomePage } from "./pages";
import theme from "./styles/theme";
import "./styles/styles.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider autoHideDuration={3000}>
        <SnackbarUtilitiesConfigurator />
        <HomePage />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
