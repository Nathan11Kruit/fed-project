import './App.css';
import "./navbar.css";
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import { useState } from 'react'; 
import Axios from 'axios';



function App() {
// create fields
const [pokemonName, setPokemonName] = useState("");
const [pokemonChosen, setPokemonChosen] = useState(false);
const [pokemon, setPokemon] = useState({
      name: pokemonName,
      species: "",
      img: "",
      hp: "",
      attack: "",
      defense: "",
      type: "",
});

// get from api
const searchPokemon = () => {
  Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response)=>{
    setPokemon({
      name: pokemonName,
      species: response.data.species.name,
      img: response.data.sprites.front_default,
      hp: response.data.stats[0].base_stat,
      attack: response.data.stats[1].base_stat,
      defense: response.data.stats[2].base_stat,
      type: response.data.types[0].type.name,

    });
    setPokemonChosen(true);
  }
  );
};

  return (
    <div className="App">
     <div className="container">
    
      <Navbar />
      
               

        
        <Home />
        <div className="displaySection">
          {!pokemonChosen ? (<h1>Typ hier de naam van je favoriete pokemon!</h1>) : (
            <>
          <h1>{pokemon.name}</h1>
          <img alt="" src={pokemon.img}/>
          <h3>Species: {pokemon.species}</h3>
          <h3>Defense: {pokemon.defense}</h3>

          </>
          )}
          <input type="text" onChange={(event => {setPokemonName(event.target.value)})}></input>
                <button onClick={searchPokemon}>search database</button>
        </div>
      <Footer />
      </div>

    </div>
  );
}

export default App;
