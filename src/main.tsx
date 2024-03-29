import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
import App from "./App.tsx";
import { AxiosInterceptor } from "./interceptors/axios.interceptor.tsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

AxiosInterceptor();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <CssBaseline />
    <App />
  </>,
);
