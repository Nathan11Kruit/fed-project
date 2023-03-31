import './App.css';
import "./navbar.css";
import "./home.css";
import "./footer.css";

import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import { useState } from 'react'; 
import Axios from 'axios';

function App() {



  
  const [num, setNum] = useState(false);


  function randomPokemon(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)  };

    function randomNewPokemon(){
    const random = Math.floor(Math.random() * 256 + 1);
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${random}`).then((response)=>{
      setPokemon({
        name: response.data.name,
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
    }
    );    
  }; 
    // create fields
const [pokemonName, setPokemonName] = useState("");
const [pokemon, setPokemon] = useState({
      name: num,
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
// search pokemon in database by name
const searchPokemon = () => { 
  Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response)=>{
    setPokemon({
      name: response.data.name,
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
  }
  );
};
  return (
    <div className="container">
     <div className="App">    
      <Navbar />       
      <div className="home"> 
        <div className="row pt">
            <div className="col-5"> 
            <h2 className="home-title pt-5">Kies je favoriete Pokemon</h2>

              <input type="text" onChange={(event => {setPokemonName(event.target.value);})}></input>     
              
              <button type="button" className="btn btn-danger" onClick={searchPokemon}>search database</button>
              <h2 className='home-title pt-5'>Weet je nog niet wie je favoriet is? Gebruik dan de knop hieronder!</h2>
              <button type="button" className="btn btn-warning"  onClick={event => {randomNewPokemon();   }}   >Willekeurige pokemon kiezen!</button>



            </div>
            <div className="col-6">
                 
              </div>
            </div>
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
