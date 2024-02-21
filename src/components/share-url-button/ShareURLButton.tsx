import { Fab, styled } from "@mui/material";
import { GiShare } from "react-icons/gi";
import { SnackbarUtilities } from "../../utilities";

const FloatingBtn = styled(Fab)(() => ({
  position: "fixed",
  bottom: "30px",
  right: "30px",
  padding: "1em",
}));

const ShareURLButton = () => {
  const copyToClipboard = async () => {
    /* eslint-disable-next-line no-restricted-globals */
    await navigator.clipboard.writeText(location.href);

    SnackbarUtilities.success("Copied to clipboard!");
  };

  return (
    <FloatingBtn onClick={copyToClipboard} color="primary" size="medium">
      <GiShare size={18} />
    </FloatingBtn>
  );
};

export default ShareURLButton;
