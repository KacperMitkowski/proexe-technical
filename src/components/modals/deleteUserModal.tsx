import { Button, Typography } from "@mui/material";
import { useContext } from "react";
import { CommonContext } from "../../contexts";
import { COMMON_ACTIONS } from "../../reducers";
import { useGlobalStyles } from "../../styles/styles";
import { CustomModal } from "../common";

interface IProps {
  callbackAfterConfirmClick: Function;
}

export const DeleteUserModal = ({ callbackAfterConfirmClick }: IProps) => {
  const commonContext = useContext(CommonContext);
  const globalClasses = useGlobalStyles();

  return (
    <CustomModal
      modalOpen={commonContext.globalState.isDeleteUsersModalOpen}
      close={() =>
        commonContext.dispatch({
          type: COMMON_ACTIONS.CLOSE_DELETE_USERS_MODAL_ACTION,
        })
      }
      customClass={globalClasses.deleteUserModal}
    >
      <Typography variant="h5" mb={2}>
        Do you want to delete user with id: &nbsp;
        {commonContext.globalState.deletedUserId}?
      </Typography>

      <div style={{ position: "absolute", bottom: 10 }}>
        <Button
          onClick={() => {
            callbackAfterConfirmClick();
            commonContext.dispatch({
              type: COMMON_ACTIONS.CLOSE_DELETE_USERS_MODAL_ACTION,
            });
            commonContext.dispatch({
              type: COMMON_ACTIONS.OPEN_NOTIFICATION_MODAL_ACTION,
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
  );
};
