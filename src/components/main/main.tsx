import { Button, Grid } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import {
  DARK_MODE_BACKGROUND_COLOR,
  LIGHT_MODE_BACKGROUND_COLOR,
} from "../../styles/consts";
import { useGlobalStyles } from "../../styles/styles";

export const Main = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const globalClasses = useGlobalStyles();

  return (
    <Grid
      container
      style={{
        backgroundColor: isDarkTheme
          ? DARK_MODE_BACKGROUND_COLOR
          : LIGHT_MODE_BACKGROUND_COLOR,
      }}
    >
      <Button className={globalClasses.button} variant="contained">
        Contained
      </Button>
    </Grid>
  );
};
