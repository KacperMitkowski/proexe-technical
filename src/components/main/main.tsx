import {
  Button,
  CircularProgress,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
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
import { User } from "../../types";

export const Main = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const themeStyles = {
    color: isDarkTheme ? DARK_MODE_FONT_COLOR : LIGHT_MODE_FONT_COLOR,
    backgroundColor: isDarkTheme
      ? DARK_MODE_BACKGROUND_COLOR
      : LIGHT_MODE_BACKGROUND_COLOR,
  };
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
        <Typography mr={2}>Error: {error.message}</Typography>
        <Button variant="contained" onClick={() => PageHelper.refreshPage()}>
          Refresh page
        </Button>
      </Grid>
    </Grid>
  ) : (
    <Grid
      className={globalClasses.fullHeight}
      padding={5}
      container
      style={themeStyles}
    >
      <Grid item xs={12}>
        <Typography style={themeStyles} variant="h2">
          Dashboard
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h5" style={themeStyles}>
          User list
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Button className={globalClasses.button} variant="contained">
          Add new
        </Button>
      </Grid>

      <TableContainer component={Paper} style={themeStyles}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={themeStyles}>Id</TableCell>
              <TableCell style={themeStyles}>Name</TableCell>
              <TableCell style={themeStyles}>Username</TableCell>
              <TableCell style={themeStyles}>Email</TableCell>
              <TableCell style={themeStyles}>City</TableCell>
              <TableCell>&nbsp;</TableCell>
              <TableCell>&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user: User) => {
              return (
                <TableRow
                  key={user.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={themeStyles} scope="row">
                    {user.id}
                  </TableCell>
                  <TableCell style={themeStyles}>{user.name}</TableCell>
                  <TableCell style={themeStyles}>{user.username}</TableCell>
                  <TableCell style={themeStyles}>{user.email}</TableCell>
                  <TableCell style={themeStyles}>
                    {user?.address?.city}
                  </TableCell>
                  <TableCell>
                    <Button variant="contained">Edit</Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="contained">Delete</Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};
