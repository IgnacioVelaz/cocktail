export const getQueryFromArg = (arg: string) => {
  return arg.split("?q=")[1].replaceAll("+", " ").replaceAll("%C3%B1", "ñ");
};
