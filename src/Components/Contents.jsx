import React from "react";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Contents = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container fixed>
      <Grid container>
          <Grid item xs={12}>
            <Paper className={classes.paper}  elevation={3} >
                <Typography variant="h5">Lists Me : </Typography>
            </Paper>
          </Grid>
      </Grid>
      </Container>
    </div>
  );
};

export default Contents;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
  },
}));
