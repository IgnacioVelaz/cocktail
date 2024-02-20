import { SnackbarProvider } from "notistack";
import { SnackbarUtilitiesConfigurator } from "./utilities";
import { HomePage } from "./pages";

function App() {
  return (
    <SnackbarProvider autoHideDuration={3000}>
      <SnackbarUtilitiesConfigurator />
      <HomePage />
    </SnackbarProvider>
  );
}

export default App;
