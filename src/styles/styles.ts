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

  fullHeight: {
    height: "100vh",
  },

  button: {
    height: 50,
    width: 150,
  },

  flexWithCentralize: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  deleteModal: {
    position: "absolute" as "absolute",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",

    width: "30%",
    height: "30%",
    top: "25vh",
    left: "70vh",
  },
}));
