import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
import App from "./App.tsx";
import { AxiosInterceptor } from "./interceptors/axios.interceptor.tsx";

AxiosInterceptor();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <CssBaseline />
    <App />
  </>,
);
