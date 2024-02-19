import axios from "axios";
import { SnackbarUtilities, getAxiosError } from "../utilities";

export const AxiosInterceptor = () => {
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      SnackbarUtilities.error(getAxiosError(error.code));
      return Promise.reject(error);
    },
  );
};
