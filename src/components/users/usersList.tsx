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
import { EnhancedTableBody, EnhancedTableHead, NoUsers } from ".";
import { ErrorMessage, Spinner } from "../common";
import { CommonContext } from "../../contexts";
import { COMMON_ACTIONS } from "../../reducers/commonReducer";
import {
  DeleteUserModal,
  EditUserModal,
  NewUserModal,
  NotificationModal,
} from "../modals";

const refreshPageHandler = () => PageHelper.refreshPage();

export const UsersList = () => {
  // styles
  const globalClasses = useGlobalStyles();
  const { isDarkTheme } = useContext(ThemeContext);
  const themeStyles = {
    color: isDarkTheme ? DARK_MODE_FONT_COLOR : LIGHT_MODE_FONT_COLOR,
    backgroundColor: isDarkTheme
      ? DARK_MODE_BACKGROUND_COLOR
      : LIGHT_MODE_BACKGROUND_COLOR,
  };

  // api
  const userFacade = useFacadeUserAPI();
  const {
    users,
    error,
    actionExecuting,
    getUsers,
    createUser,
    editUser,
    deleteUser,
  } = userFacade;

  // state
  const commonContext = useContext(CommonContext);
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof User>("id");

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
          <Button
            onClick={() =>
              commonContext.dispatch({
                type: COMMON_ACTIONS.OPEN_NEW_USER_MODAL_ACTION,
              })
            }
            variant="contained"
            color="warning"
          >
            Add new
          </Button>
        </Grid>

        {users.length !== 0 ? (
          <Grid xs={12}>
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
                />
              </Table>
            </TableContainer>
          </Grid>
        ) : (
          <NoUsers />
        )}
      </Grid>

      <DeleteUserModal
        callbackAfterConfirmClick={async () =>
          await deleteUser(commonContext.globalState.deletedUserId)
        }
      />

      <NewUserModal callbackAfterConfirmClick={createUser} />

      <EditUserModal callbackAfterConfirmClick={editUser} />

      <NotificationModal />
    </>
  );
};
