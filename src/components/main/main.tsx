import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import { useCallback, useContext, useEffect } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import { PageHelper } from "../../helpers";
import { useFacadeUserAPI } from "../../hooks";
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
  const userFacade = useFacadeUserAPI();
  const { users, error, actionExecuting, createUser, deleteUser, getUsers } =
    userFacade;

  useEffect(() => {
    const fetchUsers = async () => await getUsers();
    fetchUsers();
  }, []);

  return actionExecuting ? (
    <Grid container className={globalClasses.fullHeight}>
      <Grid item xs={12} className={globalClasses.flexWithCentralize}>
        <CircularProgress size={100} thickness={2} />
      </Grid>
    </Grid>
  ) : error ? (
    <Grid container className={globalClasses.fullHeight}>
      <Grid item xs={12} className={globalClasses.flexWithCentralize}>
        <Typography>Error: {error.message}</Typography>
        <Button
          style={{ marginLeft: "20px" }}
          variant="contained"
          onClick={() => PageHelper.refreshPage()}
        >
          Refresh page
        </Button>
      </Grid>
    </Grid>
  ) : (
    <Grid
      padding={5}
      container
      style={{
        height: "100vh",
        backgroundColor: isDarkTheme
          ? DARK_MODE_BACKGROUND_COLOR
          : LIGHT_MODE_BACKGROUND_COLOR,
      }}
    >
      <Grid item xs={12} style={{ height: "10vh" }}>
        <Typography
          color={isDarkTheme ? DARK_MODE_FONT_COLOR : LIGHT_MODE_FONT_COLOR}
          variant="h2"
        >
          Dashboard
        </Typography>
      </Grid>
      <Grid item xs={6} style={{ height: "90vh" }}>
        <Typography
          variant="h5"
          color={isDarkTheme ? DARK_MODE_FONT_COLOR : LIGHT_MODE_FONT_COLOR}
        >
          User list
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Button className={globalClasses.button} variant="contained">
          Add new
        </Button>
      </Grid>
    </Grid>
  );
};
