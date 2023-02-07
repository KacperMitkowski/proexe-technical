import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import { flexWithCentralize, fullHeight } from ".";

interface IProps {
  size: number;
  thickness: number;
}

export const Spinner = ({ size, thickness }: IProps) => {
  return (
    <Grid container style={fullHeight}>
      <Grid item xs={12} style={flexWithCentralize}>
        <CircularProgress size={size} thickness={thickness} />
      </Grid>
    </Grid>
  );
};
