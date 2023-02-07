import { Alert, Snackbar } from "@mui/material";
import { useContext } from "react";
import { CommonContext } from "../../contexts";
import { COMMON_ACTIONS } from "../../reducers";

export const NotificationModal = () => {
  const commonContext = useContext(CommonContext);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    commonContext.dispatch({
      type: COMMON_ACTIONS.CLOSE_NOTIFICATION_MODAL_ACTION,
    });
  };

  return (
    <Snackbar
      open={commonContext.globalState.isNotificationModalOpen}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        variant="filled"
        onClose={handleClose}
        severity="success"
        sx={{ width: "100%" }}
      >
        Action completed with success!
      </Alert>
    </Snackbar>
  );
};
