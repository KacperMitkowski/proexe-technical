import { makeStyles } from "@mui/styles";

export const useLocalStyles = makeStyles((darkTheme: boolean) => ({
  navbarItem: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "&:hover": {
      backgroundColor: "#4A4A4A",
    },
  },
}));
