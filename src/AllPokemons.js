import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
  TextField,
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
// import classes from "*.module.css";
// import mainData from "./mainData";
import { UpperCaseLetterName } from "./constVariables";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";

const columnStyles = makeStyles((theme) => ({
  allPokemonsBox: {
    paddingRight: "75px",
    paddingLeft: "75px",
    paddingTop: "35px",
  },
  cardMedia: {
    margin: "auto",
  },
  cardContent: {
    textAlign: "center",
  },
  searchBar: {
    display: "flex",
    paddingLeft: "20px",
    paddingRight: "20px",
    marginBottom: "5px",
    paddingTop: "5px",
    backgroundColor: fade(theme.palette.common.white, 0.15),
  },
  searchIcon: {
    alignSelf: "flex-end",
    marginBottom: "5px",
  },
  searchInput: {
    widht: "200px",
    margin: "5px",
  },
}));

const AllPokemons = (props) => {
  const { history } = props;
  const classes = columnStyles();
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=807`)
      .then(function (response) {
        const { data } = response;
        const { results } = data;
        const newPokemonData = {};
        results.forEach((pokemon, index) => {
          newPokemonData[index + 1] = {
            id: index + 1,
            name: pokemon.name,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`,
          };
        });
        setPokemonData(newPokemonData);
      });
  }, []);

  const singlePokemonCard = (pokemonId) => {
    console.log(pokemonData[`${pokemonId}`]);
    const { id, name, sprite } = pokemonData[pokemonId];
    // const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
      <Grid item xs={4} key={pokemonId}>
        <Card onClick={() => history.push(`/pokemon/${name}`)}>
          <CardMedia
            className={classes.cardMedia}
            image={sprite}
            style={{ width: "130px", height: "130px" }}
          />
          <CardContent className={classes.cardContent}>
            <Typography>{`${id}. ${UpperCaseLetterName(name)}`}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.searchBar}>
            <SearchIcon className={classes.searchIcon} />
            <TextField className={classes.searchInput} />
          </div>
        </Toolbar>
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
