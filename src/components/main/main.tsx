import { Button, Grid, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import {
  DARK_MODE_BACKGROUND_COLOR,
  DARK_MODE_FONT_COLOR,
  LIGHT_MODE_BACKGROUND_COLOR,
  LIGHT_MODE_FONT_COLOR,
} from "../../styles/consts";
import { useGlobalStyles } from "../../styles/styles";

export const Main = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const globalClasses = useGlobalStyles();

  useEffect(() => {}, []);

  return (
    <Grid
      padding={5}
      container
      style={{
        backgroundColor: isDarkTheme
          ? DARK_MODE_BACKGROUND_COLOR
          : LIGHT_MODE_BACKGROUND_COLOR,
      }}
    >
      <Grid xs={12}>
        <Typography
          color={isDarkTheme ? DARK_MODE_FONT_COLOR : LIGHT_MODE_FONT_COLOR}
          variant="h2"
          gutterBottom
        >
          Dashboard
        </Typography>
      </Grid>
      <Grid xs={6}>
        <Typography
          variant="h5"
          color={isDarkTheme ? DARK_MODE_FONT_COLOR : LIGHT_MODE_FONT_COLOR}
        >
          User list
        </Typography>
      </Grid>
      <Grid xs={6}>
        <Button className={globalClasses.button} variant="contained">
          Contained
        </Button>
      </Grid>
    </Grid>
  );
};
