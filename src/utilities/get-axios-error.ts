import { TypeWithKey } from "../models";

const getAxiosError = (errorCode: string) => {
  const codeMatcher: TypeWithKey<string> = {
    ERR_NETWORK: "The server is not accessible. Please check your network or try again later.",
    ERR_BAD_REQUEST: "Can't find the requested resource",
  };

  return codeMatcher[errorCode];
};

export default getAxiosError;
