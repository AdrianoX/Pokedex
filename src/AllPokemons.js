import React from "react";
import { AppBar, Toolbar, Grid, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import classes from "*.module.css";

const columnStyles = makeStyles({
  allPokemonsBox: {
    paddingRight: "75px",
    paddingLeft: "75px",
    paddingTop: "35px",
  },
});

const singlePokemonCard = () => {
  return (
    <Grid item xs={4}>
      <Card>
        <CardContent>First Single Pokemon Card</CardContent>
      </Card>
    </Grid>
  );
};

const allPokemons = () => {
  const classes = columnStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
      <Grid container spacing={2} className={classes.allPokemonsBox}>
        {singlePokemonCard()}
        {singlePokemonCard()}
        {singlePokemonCard()}
      </Grid>
    </>
  );
};

export default allPokemons;
