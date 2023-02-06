import { Box, Button, CssBaseline, Typography } from "@mui/material";
import { useContext } from "react";
import { Navbar } from ".";
import { CommonContext } from "../../contexts";
import { useFacadeUserAPI } from "../../hooks";
import { COMMON_ACTIONS } from "../../reducers";
import { useGlobalStyles } from "../../styles/styles";
import { CustomModal } from "../common";

interface IProps {
  children: any;
}

export const Layout = ({ children }: IProps) => {
  const commonContext = useContext(CommonContext);
  const globalClasses = useGlobalStyles();

  const userFacade = useFacadeUserAPI();
  const { createUser, deleteUser } = userFacade;

  console.log(commonContext);

  return (
    <>
      <Box sx={{ display: "flex", height: "100%" }}>
        <CssBaseline />

        <Navbar />

        {children}
      </Box>

      <CustomModal
        modalOpen={commonContext.globalState.isDeleteUsersModalOpen}
        close={() =>
          commonContext.dispatch({
            type: COMMON_ACTIONS.CLOSE_DELETE_USERS_MODAL_ACTION,
          })
        }
        customClass={globalClasses.deleteModal}
      >
        <Typography variant="h4" mb={2}>
          Do you want to delete user?
        </Typography>

        <div style={{ position: "absolute", bottom: 10 }}>
          <Button
            onClick={async () => {
              await deleteUser(commonContext.globalState.deletedUserId);
              commonContext.dispatch({
                type: COMMON_ACTIONS.CLOSE_DELETE_USERS_MODAL_ACTION,
              });
            }}
            variant="contained"
            style={{ backgroundColor: "red", marginRight: 10 }}
          >
            Yes
          </Button>
          <Button
            onClick={() =>
              commonContext.dispatch({
                type: COMMON_ACTIONS.CLOSE_DELETE_USERS_MODAL_ACTION,
              })
            }
            variant="contained"
          >
            No
          </Button>
        </div>
      </CustomModal>
    </>
  );
};
