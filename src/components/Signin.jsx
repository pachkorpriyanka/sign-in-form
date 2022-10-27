import { Grid, TextField, Typography } from "@mui/material";
import React from "react";

const Signin = () => {
  return (
    <>
      <h1>signin</h1>
      <Grid container className="name">
        <Grid item xs={0.8}>
          <Typography>email:</Typography>
        </Grid>
        <Grid item xs={11.2}>
          <TextField place />
        </Grid>
        <Grid item xs={0.8}>
          <Typography>password:</Typography>
        </Grid>
        <Grid item xs={11.2}>
          <TextField />
        </Grid>
      </Grid>
    </>
  );
};

export default Signin;
