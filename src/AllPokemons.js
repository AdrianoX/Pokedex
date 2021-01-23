import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardContent,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import classes from "*.module.css";
import mainData from "./mainData";

const columnStyles = makeStyles({
  allPokemonsBox: {
    paddingRight: "75px",
    paddingLeft: "75px",
    paddingTop: "35px",
  },
});

const singlePokemonCard = (pokemonId) => {
  return (
    <Grid item xs={4} key={pokemonId}>
      <Card>
        <CardContent>First Single Pokemon Card</CardContent>
      </Card>
    </Grid>
  );
};

const AllPokemons = () => {
  const classes = columnStyles();
  const [pokemonData, setPokemonData] = useState(mainData);
  return (
    <>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
      {pokemonData ? (
        <Grid container spacing={2} className={classes.allPokemonsBox}>
          {Object.keys(pokemonData).map((pokemonId) =>
            singlePokemonCard(pokemonId)
          )}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default AllPokemons;
