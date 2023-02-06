import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useGlobalStyles = makeStyles((theme: Theme) => ({
  drawer: {
    flexShrink: 0,
  },
  resetPadding: {
    padding: 0,
  },
  resetPaddingTop: {
    paddingTop: 0,
  },
  resetPaddingLeft: {
    paddingLeft: 0,
  },
  resetPaddingRight: {
    paddingRight: 0,
  },
  resetPaddingBottom: {
    paddingBottom: 0,
  },

  fullWidth: {
    width: "100%",
  },

  button: {
    height: 50,
    width: 150,
  },
}));
