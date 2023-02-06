import { makeStyles } from "@mui/styles";

export const useLocalStyles = makeStyles((darkTheme: boolean) => ({
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
