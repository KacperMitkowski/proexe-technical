import { Button, Typography } from "@mui/material";
import { useContext } from "react";
import { deleteUserModalStyle } from ".";
import { CommonContext } from "../../contexts";
import { COMMON_ACTIONS } from "../../reducers";
import { CustomModal } from "../common";

interface IProps {
  callbackAfterConfirmClick: Function;
}

export const DeleteUserModal = ({ callbackAfterConfirmClick }: IProps) => {
  const commonContext = useContext(CommonContext);

  return (
    <CustomModal
      modalOpen={commonContext.globalState.isDeleteUsersModalOpen}
      close={() => {
        commonContext.dispatch({
          type: COMMON_ACTIONS.RESET_DELETED_USER_ID_ACTION,
        });
        commonContext.dispatch({
          type: COMMON_ACTIONS.CLOSE_ALL_MODALS_ACTION,
        });
      }}
      style={deleteUserModalStyle}
    >
      <Typography variant="h5" mb={2}>
        Do you want to delete user with id: &nbsp;
        {commonContext.globalState.deletedUserId}?
      </Typography>

      <Button
        color="error"
        onClick={() => {
          callbackAfterConfirmClick();
          commonContext.dispatch({
            type: COMMON_ACTIONS.RESET_DELETED_USER_ID_ACTION,
          });
          commonContext.dispatch({
            type: COMMON_ACTIONS.CLOSE_ALL_MODALS_ACTION,
          });
          commonContext.dispatch({
            type: COMMON_ACTIONS.OPEN_NOTIFICATION_MODAL_ACTION,
          });
        }}
        variant="contained"
        style={{ marginRight: 10 }}
      >
        Yes
      </Button>
      <Button
        onClick={() => {
          commonContext.dispatch({
            type: COMMON_ACTIONS.RESET_DELETED_USER_ID_ACTION,
          });
          commonContext.dispatch({
            type: COMMON_ACTIONS.CLOSE_ALL_MODALS_ACTION,
          });
        }}
        variant="contained"
        color="warning"
      >
        No
      </Button>
    </CustomModal>
  );
};
