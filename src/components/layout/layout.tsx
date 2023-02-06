import { Box, CssBaseline, Grid } from "@mui/material";
import { Navbar } from ".";

interface IProps {
  children: any;
}

export const Layout = ({ children }: IProps) => {
  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <CssBaseline />

      <Navbar />

      <Grid container>{children}</Grid>
    </Box>
  );
};
