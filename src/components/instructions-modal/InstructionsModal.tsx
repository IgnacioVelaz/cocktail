import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { FC } from "react";
import { CocktailDetails } from "../../models";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  cocktail: CocktailDetails | null;
};

const InstructionsModal: FC<Props> = ({ isOpen, handleClose, cocktail }) => {
  if (!cocktail) {
    handleClose();
    return null;
  }
  const { name, instructions } = cocktail;
  return (
    <Dialog open={isOpen} aria-labelledby="dialog-title" onClose={handleClose} BackdropProps={{ onClick: handleClose }}>
      <DialogTitle id="dialog-title">{`${name} preparation`}</DialogTitle>
      <DialogContent>
        <DialogContentText>{instructions}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
export default InstructionsModal;
