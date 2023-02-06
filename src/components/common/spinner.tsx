import { Button, CircularProgress, Grid, Typography } from "@mui/material";

interface IProps {
  classes: {
    containerClass: string;
    itemClass: string;
  };
  size: number;
  thickness: number;
}

export const Spinner = ({ classes, size, thickness }: IProps) => {
  return (
    <Grid container className={classes.containerClass}>
      <Grid item xs={12} className={classes.itemClass}>
        <CircularProgress size={size} thickness={thickness} />
      </Grid>
    </Grid>
  );
};
