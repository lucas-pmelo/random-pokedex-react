import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState({});

  const searchPokemon = () => {
    let randNum = Math.abs(Math.floor(Math.random() * (0 - 900)));
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${randNum}`).then((res) => {
      setPokemon({
        name: res.data.name.toUpperCase(),
        img: res.data.sprites.front_default
      });
    });
  };

  return (
    <div className="App">
      <h1 className="title">Melo's Pokedex</h1>
      <button className="randomButton" onClick={searchPokemon}>
        Get random Pokemon
      </button>
      <div className="pokemonName">{pokemon.name}</div>
      <img className="pokemonImage" src={pokemon.img}></img>
    </div>
  );
}

export default App;
