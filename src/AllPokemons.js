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
import { Link } from "react-router-dom";
// import styles from "./Header.module.scss";

// import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// const theme = createMuiTheme({
//   typography: {
//     fontFamily: ["Press Start 2P", "cursive"].join(","),
//   },
// });

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
    marginLeft: "55px",
    display: "flex",
    paddingLeft: "20px",
    paddingRight: "20px",
    // marginLeft: "1550px",
    // position: "screenright",
    // marginBottom: "5px",
    // paddingTop: "-5px",
    backgroundColor: fade(theme.palette.common.white, 0.15),
  },
  searchIcon: {
    alignSelf: "flex-end",
    marginBottom: "5px",
  },
  searchInput: {
    widht: "200px",
    // height: "40px",
    marginBottom: "5px",
  },
  headerText: {
    marginLeft: "495px",
    // fontFamily: "Hanalei",
    // fontFamily: "Rock Salt",
    // fontFamily: "Orbitron",
    fontFamily: "Monoton",
    fontSize: "45px",
    color: "#FF0000",
  },
  logo: {
    height: "45px",
    width: "45px",
  },
}));

const AllPokemons = (props) => {
  const { history } = props;
  const classes = columnStyles();
  const [pokemonData, setPokemonData] = useState({});
  const [filter, setFilter] = useState("");

  const searchBarInput = (e) => {
    setFilter(e.target.value);
  };

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
          {" "}
          {/* <-- url extension v2 */}
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
            <TextField
              onChange={searchBarInput}
              className={classes.searchInput}
              label="Pokemon"
              variant="standard"
            />
          </div>
          {/* <ThemeProvider theme={theme}> */}
          <Typography
            align="center"
            variant="h4"
            className={classes.headerText}
          >
            {/* <h3 style={{ fontFamily: "Press Start 2P" }}>PokedeX</h3> */}
            PokedeX
          </Typography>
          <Link
            onClick={() =>
              window.open(
                "https://www.youtube.com/watch?v=EE-xtCF3T94&ab_channel=CamdenPowell",
                "_blank"
              )
            }
          >
            <img
              src="https://i.postimg.cc/Lsw-mpF41/14.png"
              alt="logo"
              className={classes.logo}
            />
          </Link>
          {/* </ThemeProvider> */}
        </Toolbar>
      </AppBar>

      {pokemonData ? (
        <Grid container spacing={2} className={classes.allPokemonsBox}>
          {Object.keys(pokemonData).map(
            (pokemonId) =>
              pokemonData[pokemonId].name.includes(filter) && // filter condition [CL -> OR ?] Check later...
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
