import { Button, Grid, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { CommonContext } from "../../contexts";
import { EmailHelper } from "../../helpers";
import { COMMON_ACTIONS } from "../../reducers";
import { useGlobalStyles } from "../../styles/styles";
import { User } from "../../types";
import { CustomModal } from "../common";

interface IProps {
  callbackAfterConfirmClick: Function;
}

const HELPER_TEXT = "Required field";

export const NewUserModal = ({ callbackAfterConfirmClick }: IProps) => {
  const commonContext = useContext(CommonContext);
  const globalClasses = useGlobalStyles();
  const [newUser, setNewUser] = useState<User>(new User());

  const handleInputChange = (event) => {
    const changedNewUser = { ...newUser };
    changedNewUser[event.target.name] = event.target.value;
    setNewUser(changedNewUser);
  };

  const resetUser = () => {
    setNewUser(new User());
  };

  const isFormDisabled = () => {
    return (
      newUser.name?.trim() === "" ||
      newUser.email?.trim() === "" ||
      !EmailHelper.isEmailOk(newUser.email?.trim())
    );
  };

  return (
    <CustomModal
      modalOpen={commonContext.globalState.isNewUserModalOpen}
      close={() => {
        commonContext.dispatch({
          type: COMMON_ACTIONS.CLOSE_ALL_MODALS_ACTION,
        });
        resetUser();
      }}
      customClass={globalClasses.newUserModal}
    >
      <Typography variant="h4" mb={2}>
        Form
      </Typography>

      <Grid container>
        <Grid item xs={12} mb={1}>
          <TextField
            fullWidth
            error={newUser.name?.trim() === ""}
            value={newUser.name}
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
              newUser.email?.trim() === "" ||
              !EmailHelper.isEmailOk(newUser.email)
            }
            value={newUser.email}
            name="email"
            onChange={handleInputChange}
            label="Email"
            helperText={HELPER_TEXT}
            required
          />
        </Grid>
      </Grid>

      <div style={{ position: "absolute", bottom: 10 }}>
        <Button
          onClick={() => {
            commonContext.dispatch({
              type: COMMON_ACTIONS.CLOSE_ALL_MODALS_ACTION,
            });
            resetUser();
          }}
          variant="outlined"
          color="error"
          style={{ marginRight: 10 }}
        >
          Cancel
        </Button>
        <Button
          disabled={isFormDisabled()}
          onClick={async () => {
            await callbackAfterConfirmClick(newUser);
            commonContext.dispatch({
              type: COMMON_ACTIONS.CLOSE_ALL_MODALS_ACTION,
            });
            commonContext.dispatch({
              type: COMMON_ACTIONS.OPEN_NOTIFICATION_MODAL_ACTION,
            });
            resetUser();
          }}
          variant="contained"
          color="success"
        >
          Submit
        </Button>
      </div>
    </CustomModal>
  );
};
