import React from "react";
import { AppBar, Toolbar, Grid } from "@material-ui/core";

const allPokemons = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          First Poke Column
        </Grid>
        <Grid item xs={4}>
          Second Poke Column
        </Grid>
        <Grid item xs={4}>
          Third Poke Column
        </Grid>
      </Grid>
    </>
  );
};

export default allPokemons;
