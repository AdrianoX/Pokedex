/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
// import mainData from "./mainData";
import { Typography, Link, CircularProgress, Button } from "@material-ui/core";
import { UpperCaseLetterName } from "./constVariables";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

const columnStyles = makeStyles((theme) => ({
  singlePokemonsBox: {
    marginLeft: "20px",
    marginTop: "5px",
  },
  button: {
    backgroundColor: "#FFA500",
    marginLeft: "20px",
    marginTop: "5px",
    borderColor: "red",
    border: "2px solid red",
    borderRadius: "5px",
  },
}));

const SinglePokemon = (props) => {
  const { history, match } = props;
  const classes = columnStyles();
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(undefined);
  //   return <div> {`Single pokemon page -> Pokemon Number: ${pokemonId}`}</div>;

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then(function (response) {
        const { data } = response;
        setPokemon(data);
      })
      .catch(function (error) {
        setPokemon(false);
      });
  }, [pokemonId]);

  const createPokemonStats = () => {
    const { name, id, species, height, weight, types, sprites } = pokemon;
    const pokemonUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    const { front_default } = sprites;
    return (
      <>
        <Typography variant="h1" className={classes.singlePokemonsBox}>
          {`${id}.`} {UpperCaseLetterName(name)}
          <img src={front_default} />
        </Typography>
        <img
          style={{ width: "300px", height: "300px", marginLeft: "25px" }}
          src={pokemonUrl}
        />
        <Typography variant="h3" className={classes.singlePokemonsBox}>
          Pokemon Stats
        </Typography>
        <Typography className={classes.singlePokemonsBox}>
          {"Species: "}
          <Link href={species.url}>{species.name} </Link>
        </Typography>
        <Typography className={classes.singlePokemonsBox}>
          Height: {height}{" "}
        </Typography>
        <Typography className={classes.singlePokemonsBox}>
          Weight: {weight}{" "}
        </Typography>
        <Typography variant="h6" className={classes.singlePokemonsBox}>
          {" "}
          Types:
        </Typography>
        {types.map((typeInfo) => {
          const { type } = typeInfo;
          const { name } = type;
          return (
            <Typography className={classes.singlePokemonsBox} key={name}>
              {" "}
              {`${name}`}
            </Typography>
          );
        })}
      </>
    );
  };

  return (
    <>
      {pokemon === undefined && <CircularProgress />}
      {pokemon !== undefined && pokemon && createPokemonStats(pokemon)}
      {pokemon === false && <Typography> Pokemon not found</Typography>}
      {pokemon !== undefined && (
        <Button
          color="primary"
          variant="contained"
          className={classes.button}
          onClick={() => history.push("/")}
        >
          Return to PokedeX
        </Button>
      )}
    </>
  );
};

export default SinglePokemon;
