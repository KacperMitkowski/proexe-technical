import { Button, Grid, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { editUserModalStyle } from ".";
import { CommonContext } from "../../contexts";
import { EmailHelper } from "../../helpers";
import { COMMON_ACTIONS } from "../../reducers";
import { CustomModal } from "../common";

interface IProps {
  callbackAfterConfirmClick: Function;
}

const HELPER_TEXT = "Required field";

export const EditUserModal = ({ callbackAfterConfirmClick }: IProps) => {
  const commonContext = useContext(CommonContext);
  const editedUser = commonContext.globalState.editedUser;

  const handleInputChange = (event) => {
    const changedNewUser = { ...editedUser };
    changedNewUser[event.target.name] = event.target.value;

    commonContext.dispatch({
      type: COMMON_ACTIONS.SET_EDITED_USER_ACTION,
      payload: changedNewUser,
    });
  };

  const isFormDisabled = () =>
    editedUser?.name?.trim() === "" ||
    editedUser?.email?.trim() === "" ||
    !EmailHelper.isEmailOk(editedUser?.email?.trim()) ||
    editedUser?.username?.trim() === "" ||
    editedUser?.city?.trim() === "";

  return (
    <CustomModal
      modalOpen={commonContext.globalState.isEditUserModalOpen}
      close={() => {
        commonContext.dispatch({
          type: COMMON_ACTIONS.RESET_EDITED_USER_MODAL_ACTION,
        });
        commonContext.dispatch({
          type: COMMON_ACTIONS.CLOSE_ALL_MODALS_ACTION,
        });
      }}
      style={editUserModalStyle}
    >
      <Typography variant="h4" mb={2}>
        Edit User
      </Typography>

      <Grid container>
        <Grid item xs={12} mb={1}>
          <TextField
            fullWidth
            error={editedUser?.name?.trim() === ""}
            value={editedUser?.name}
            name="name"
            onChange={handleInputChange}
            label="Name"
            helperText={HELPER_TEXT}
            required
          />
        </Grid>
        <Grid item xs={12} mt={1}>
          <TextField
            fullWidth
            error={
              editedUser?.email?.trim() === "" ||
              !EmailHelper.isEmailOk(
                commonContext.globalState?.editedUser?.email
              )
            }
            value={editedUser?.email}
            name="email"
            onChange={handleInputChange}
            label="Email"
            helperText={HELPER_TEXT}
            required
          />
        </Grid>
        <Grid item xs={12} mt={1}>
          <TextField
            fullWidth
            error={editedUser?.username?.trim() === ""}
            value={editedUser?.username}
            name="username"
            onChange={handleInputChange}
            label="Username"
            helperText={HELPER_TEXT}
            required
          />
        </Grid>
        <Grid item xs={12} mt={1}>
          <TextField
            fullWidth
            error={editedUser?.city?.trim() === ""}
            value={editedUser?.city}
            name="city"
            onChange={handleInputChange}
            label="City"
            helperText={HELPER_TEXT}
            required
          />
        </Grid>
      </Grid>

      <Button
        onClick={() => {
          commonContext.dispatch({
            type: COMMON_ACTIONS.RESET_EDITED_USER_MODAL_ACTION,
          });
          commonContext.dispatch({
            type: COMMON_ACTIONS.CLOSE_ALL_MODALS_ACTION,
          });
        }}
        variant="outlined"
        style={{ marginRight: 10 }}
        color="error"
      >
        Cancel
      </Button>
      <Button
        disabled={isFormDisabled()}
        onClick={async () => {
          await callbackAfterConfirmClick(editedUser);
          commonContext.dispatch({
            type: COMMON_ACTIONS.RESET_EDITED_USER_MODAL_ACTION,
          });
          commonContext.dispatch({
            type: COMMON_ACTIONS.CLOSE_ALL_MODALS_ACTION,
          });
          commonContext.dispatch({
            type: COMMON_ACTIONS.OPEN_NOTIFICATION_MODAL_ACTION,
          });
        }}
        variant="contained"
        color="success"
      >
        Submit
      </Button>
    </CustomModal>
  );
};
