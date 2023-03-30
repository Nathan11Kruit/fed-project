import './App.css';
import "./navbar.css";
import "./home.css";
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
      type: "",
      speed: "",
      img: "",
      imgShiny: "",
      hp: "",
      attack: "",
      defense: "",
      specialAttack: "",
      specialDefense: "",
      speed: "",

});

// get from api
const searchPokemon = () => {
  Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response)=>{
    console.log(response);
    setPokemon({
      name: pokemonName,
      species: response.data.species.name,
      type: response.data.types[0].type.name,
      img: response.data.sprites.front_default,
      imgShiny: response.data.sprites.front_shiny,
      hp: response.data.stats[0].base_stat,
      attack: response.data.stats[1].base_stat,
      defense: response.data.stats[2].base_stat,
      specialAttack: response.data.stats[3].base_stat,
      specialDefense: response.data.stats[4].base_stat,
      speed: response.data.stats[5].base_stat,


     
      
    });
    setPokemonChosen(true);
  }
  );
};

  return (
    <div className="App">
     <div className="container">
    
      <Navbar />
      
               
      <div className="home"> 
         <h2 className="home-title pt-5">Kies je Pokemon</h2>
        <div className="h2"></div>

        <div className="row pt">
            <div className="col"> <div className="displaySection">
         
         
          <div className="col"><input type="text" onChange={(event => {setPokemonName(event.target.value)})}></input></div>
          
          <div className="col pt-3"><button onClick={searchPokemon}>search database</button></div>
          </div></div>
          </div>
            <div className="col"><h2 className='home-title pt-5'>Of gebruik de random generator!</h2></div>
            </div>
            </div>

            <div className="container pt-5">
              <div className="row">
              <div className="col-3">
                <ul className="pokemon-info">
                  <li className="pokemon-name">{pokemon.name}</li>
                  <li className="pokemon-image"><img height="200" alt="" src={pokemon.img}/></li>
                  <li className="pokemon-image-shiny"><img height="200" alt="" src={pokemon.imgShiny}/></li>

                  <li className="pokemon-species">Hitpoints: {pokemon.hp}</li>



              </ul>
              </div>
              <div className="col-3">
                <ul className="pokemon-stats">
                  <li className="pokemon-species">Species: {pokemon.species}</li>
                  <li className="pokemon-attack">Attack: {pokemon.attack}</li>
                  <li className="pokemon-defense">Defense: {pokemon.defense}</li>
                  <li className="pokemon-special-attack">Special Attack: {pokemon.specialAttack}</li>
                  <li className="pokemon-special-defense">Special Defense: {pokemon.specialDefense}</li>
                  <li className="pokemon-speed">Speed: {pokemon.speed}</li>
                  <li className="pokemon-type">Type: {pokemon.type}</li>





               </ul>
              </div>
        
       
          
        </div>
      <Footer />
      </div>

    </div>
  );
}

export default App;
