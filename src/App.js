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
    <div className="container">
     <div className="App">
    
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

            <div className="container pokemon-pokedex pb-5">
              <div className="row pokemon-pokedex-titel pt-2 pb-2">
                <div className="col"><h3 className="text-center">Gekozen Pokemon</h3></div>
              </div>
              <div className="row">
                <div className="col-3"></div>
              <div className="col-3 mt-5 pokemon-info">
                <ul className="pt-2">
                  <li className="pokemon-info-list-title pokemon-species"><h3 className='text-center'>{pokemon.name}</h3></li>
                  <li className="pokemon-info-list-item pokemon-image"><img className='mx-auto d-block' height="200" alt="" src={pokemon.img}/></li>
                  <li className="pokemon-info-list-item pokemon-image-shiny"><img height="20" alt="" src={pokemon.imgShiny}/></li>
                  <li className="pokemon-species text-center">Hitpoints: {pokemon.hp}</li>



              </ul>
              </div>
              <div className="col-3 mt-5 pokemon-stats">
                <ul className=" pt-2 ">
                  <li className="pokemon-stats-list-title pokemon-species"><h3 className='text-center'>Stats:</h3></li>
                  <li className="pokemon-stats-list-item pokemon-attack">Attack: {pokemon.attack}</li>
                  <li className="pokemon-stats-list-item pokemon-defense">Defense: {pokemon.defense}</li>
                  <li className="pokemon-stats-list-item pokemon-special-attack">Special Attack: {pokemon.specialAttack}</li>
                  <li className="pokemon-stats-list-item pokemon-special-defense">Special Defense: {pokemon.specialDefense}</li>
                  <li className="pokemon-stats-list-item pokemon-speed">Speed: {pokemon.speed}</li>
                  <li className="pokemon-stats-list-item pokemon-type">Type: {pokemon.type}</li>





               </ul>
              </div>
        
       
          
        </div>
      </div>
      <Footer />

    </div>
  );
}

export default App;
