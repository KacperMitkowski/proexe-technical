import {
  Button,
  CircularProgress,
  Grid,
  Paper,
  Table,
  TableContainer,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
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
import { Order, User } from "../../types";
import { EnhancedTableBody, EnhancedTableHead } from ".";

export const UsersList = () => {
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

  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof User>("id");

  useEffect(() => {
    const fetchUsers = async () => await getUsers();
    fetchUsers();
  }, []);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof User
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

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
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            themeStyles={themeStyles}
          />
          <EnhancedTableBody
            order={order}
            orderBy={orderBy}
            users={users}
            themeStyles={themeStyles}
          />
        </Table>
      </TableContainer>
    </Grid>
  );
};
