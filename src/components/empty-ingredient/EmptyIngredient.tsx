import { FC } from "react";
import { Typography } from "@mui/material";
import { EmptyContainer, EmptyTitle } from "./styled";

type Props = {
  title: string;
  text: string;
};

const EmptyIngredient: FC<Props> = ({ title, text }) => {
  return (
    <EmptyContainer>
      <EmptyTitle color="primary">{title}</EmptyTitle>
      <Typography>{text}</Typography>
    </EmptyContainer>
  );
};
export default EmptyIngredient;
