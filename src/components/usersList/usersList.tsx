import {
  Button,
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
import { EnhancedTableBody, EnhancedTableHead, useLocalStyles } from ".";
import { CustomModal, ErrorMessage, Spinner } from "../common";

const refreshPageHandler = () => PageHelper.refreshPage();

export const UsersList = () => {
  // styles
  const globalClasses = useGlobalStyles();
  const localClasses = useLocalStyles();
  const { isDarkTheme } = useContext(ThemeContext);
  const themeStyles = {
    color: isDarkTheme ? DARK_MODE_FONT_COLOR : LIGHT_MODE_FONT_COLOR,
    backgroundColor: isDarkTheme
      ? DARK_MODE_BACKGROUND_COLOR
      : LIGHT_MODE_BACKGROUND_COLOR,
  };

  // api
  const userFacade = useFacadeUserAPI();
  const { users, error, actionExecuting, createUser, deleteUser, getUsers } =
    userFacade;

  // state
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof User>("id");
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchUsers = async () => await getUsers();
    fetchUsers();
  }, []);

  const handleSort = (
    event: React.MouseEvent<unknown>,
    property: keyof User
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleDelete = async (userId: string) => {
    setDeleteModalOpen(true);
    // await deleteUser(userId);
  };

  return actionExecuting ? (
    <Spinner
      classes={{
        containerClass: globalClasses.fullHeight,
        itemClass: globalClasses.flexWithCentralize,
      }}
      size={100}
      thickness={2}
    />
  ) : error ? (
    <ErrorMessage
      error={error}
      classes={{
        containerClass: globalClasses.fullHeight,
        itemClass: globalClasses.flexWithCentralize,
      }}
      buttonAction={refreshPageHandler}
      buttonText="Refresh page"
    />
  ) : (
    <>
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
              onRequestSort={handleSort}
              themeStyles={themeStyles}
            />
            <EnhancedTableBody
              order={order}
              orderBy={orderBy}
              users={users}
              themeStyles={themeStyles}
              handleDelete={handleDelete}
            />
          </Table>
        </TableContainer>
      </Grid>

      <CustomModal
        modalOpen={deleteModalOpen}
        close={() => setDeleteModalOpen(false)}
        customClass={localClasses.deleteModal}
      >
        <Typography variant="h4" mb={2}>
          Do you want to delete user?
        </Typography>

        <div style={{ position: "absolute", bottom: 10 }}>
          <Button
            variant="contained"
            style={{ backgroundColor: "red", marginRight: 10 }}
          >
            Yes
          </Button>
          <Button onClick={() => setDeleteModalOpen(false)} variant="contained">
            No
          </Button>
        </div>
      </CustomModal>
    </>
  );
};
