import { Button, Grid, Typography } from "@mui/material";
import { flexWithCentralize, fullHeight } from ".";

interface IProps {
  error: any;
  buttonAction: () => void;
  buttonText: string;
}

export const ErrorMessage = ({ error, buttonAction, buttonText }: IProps) => {
  return (
    <Grid container style={fullHeight}>
      <Grid item xs={12} style={flexWithCentralize}>
        <Typography mr={2}>Error: {error.message}</Typography>
        <Button variant="contained" onClick={buttonAction}>
          {buttonText}
        </Button>
      </Grid>
    </Grid>
  );
};
