import React from "react";
import { AppBar, Toolbar, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import classes from "*.module.css";

const columnStyles = makeStyles({
  allPokemonsBox: {
    paddingRight: "75px",
    paddingLeft: "75px",
    paddingTop: "35px",
  },
});

const allPokemons = () => {
  const classes = columnStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
      <Grid container spacing={2} className={classes.columnStyles}>
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
