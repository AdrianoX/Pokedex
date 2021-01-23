import React from "react";
import mainData from './mainData'

const SinglePokemon = (props) => {
  const { match } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(mainData[`${pokemonId}`])
//   return <div> {`Single pokemon page -> Pokemon Number: ${pokemonId}`}</div>;

  const createPokemonStats = () => {
      const {name, id, species, height, weight, types, sprites } = pokemon;
      const pokemonUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
      const { front_default } = sprites;
  }

    return (

    );
};

export default SinglePokemon;
