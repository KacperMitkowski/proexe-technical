import { Button, Grid, Typography } from "@mui/material";

interface IProps {
  error: any;
  classes: {
    containerClass: string;
    itemClass: string;
  };
  buttonAction: () => void;
  buttonText: string;
}

export const ErrorMessage = ({
  error,
  classes,
  buttonAction,
  buttonText,
}: IProps) => {
  return (
    <Grid container className={classes.containerClass}>
      <Grid item xs={12} className={classes.itemClass}>
        <Typography mr={2}>Error: {error.message}</Typography>
        <Button variant="contained" onClick={buttonAction}>
          {buttonText}
        </Button>
      </Grid>
    </Grid>
  );
};
