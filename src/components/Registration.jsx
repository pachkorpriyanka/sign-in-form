import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import "./registration.css";

const Registration = () => {
  return (
    <>
      + <h1>Registration</h1>
      <Grid container className="name">
        <Grid item xs={0.8}>
          <Typography>Name:</Typography>
        </Grid>
        <Grid item xs={11.2}>
          <TextField />
        </Grid>
        <Grid item xs={0.8}>
          <Typography>email:</Typography>
        </Grid>
        <Grid item xs={11.2}>
          <TextField />
        </Grid>
        <Grid item xs={0.8}>
          <Typography>password:</Typography>
        </Grid>
        <Grid item xs={11.2}>
          <TextField />
        </Grid>
        <Grid item xs={0.8}>
          <Typography>conform password:</Typography>
        </Grid>
        <Grid item xs={11.2}>
          <TextField />
        </Grid>
      </Grid>
    </>
  );
};

export default Registration;
