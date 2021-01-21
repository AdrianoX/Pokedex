import React from "react";

const singlePokemon = (props) => {
  const { match } = props;
  const { params } = match;
  const { pokemonId } = params;

  return <div> {`Single pokemon page -> Pokemon Number: ${pokemonId}`}</div>;
};

export default singlePokemon;
