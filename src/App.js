import React from "react";
import { Route, Switch } from "react-router-dom";
import AllPokemons from "./AllPokemons";
import SinglePokemon from "./SinglePokemon";

function App() {
  return (
    <Switch>
      {/* <Route exact path="/" render={(props) => <AllPokemons {...props} />} /> */}
      <Route exact path="/" component={AllPokemons} />
      <Route
        exact
        path="/pokemon/:pokemonId/"
        render={(props) => <SinglePokemon {...props} />}
      />
    </Switch>
  );
}

export default App;
