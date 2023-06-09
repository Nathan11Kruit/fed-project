import './App.css';
import "./navbar.css";
import "./footer.css";
import Navbar from './Navbar';
import Footer from './Footer';
import { getNumberFromImageSource, shinySwitch, normalSwitch, getColorFromType } from './utilities';
import { useState } from 'react';
import Axios from 'axios';

function App() {

  const [showTeam, setShowTeam] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);

  const [pokemonRandom, setPokemonRandom] = useState("");

  function addToTeam() { //button to check whether there is currently a pokemon selected, if so show the team area and add pokemon to it.
    if (pokemon.name) {
      setPokemonList([...pokemonList, pokemon]);
      setPokemon(pokemon);
      setShowTeam(true);
    }
  }
  function randomNewPokemon() { // randomize a number between 1 and 1008, put that number in the pokemon api, then get the data from it and store it so it can be called for later on.
    const min = 1;
    const max = 1008;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    setPokemonRandom(random);
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${random}`).then((response) => {
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
    });
  }
  // search pokemon in database by name
  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {
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
    }).catch((error) => {
      console.log(error);
      console.log(`No Pokemon found for ${pokemonName}`);
    });
  };
  // define fields
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState({
    name: "",
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

  return (

    <div className="container">

      <Navbar />
      <div className="home">
        <div className="row landing-image">
          <div className="col-6 mt-6">
            <div className="landing-image-text-field text-center">
              <h2 className="home-title pt-5">Kies je favoriete Pokemon</h2>
              <div className="row pt-3">
                <div className="col-2"></div>
                <div className="col-5"><input placeholder="Pokemon naam" className="form-control pokemon-name-input" type="text" onChange={(event => { setPokemonName(event.target.value); })}></input></div>
                <div className="col-3"><button type="button" className="btn btn-danger" onClick={searchPokemon}>Zoek Pokemon</button></div>
              </div>
              <h2 className='home-title pt-5 pb-3'>Weet je nog niet wie je favoriet is? Gebruik dan de knop hieronder!</h2>
              <button type="button" className="btn btn-warning mb-3 random-pokemon-btn" onClick={event => { randomNewPokemon(); }}   >Willekeurige pokemon kiezen!</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container space-between-element-middle">
        <div className="row space-between-elements-top"></div>
        <div className="row space-between-elements-bottom"></div>
      </div>

      <div className="container pokemon-pokedex ">
        <div className="row pokemon-pokedex-titel pb-2">
          <div className="col-4"></div>
          <div className="col-4 pt-5"><h3 className="text-center chosen-pokemon-title">Gekozen Pokemon</h3></div>
        </div>
        <div className="row pb-5">
          <div className="col-3"></div>
          <div className="col-3 mt-5 pokemon-info">
            <ul className="pt-2">
              <li className="pokemon-info-list-title pokemon-species"><h3 className='text-center'>{pokemon.name}</h3></li>
              <li className="pokemon-info-list-item pokemon-image"><img id="pokemon-img" className='mx-auto d-block' height="200" alt="" src={pokemon.img} /></li>
              <li className="pokemon-species text-center">Hitpoints: {pokemon.hp}</li>
              <li className="pokemon-info-list-item pokemon-image-shiny mt-3 mx-auto text-center img-fluid"><button className="switch btn btn-primary" onClick={shinySwitch}>Shiny</button><button className="switch btn btn-info" onClick={normalSwitch}>Normal</button></li>
              <li className="pokemon-info-list-item pokemon-image text-center mt-2"><button className="switch btn btn-info btn-add-to-team" onClick={addToTeam}>Aan team toevoegen</button></li>
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

      <div className="container space-between-element-middle rotate">
        <div className="row space-between-elements-top"></div>
        <div className="row space-between-elements-bottom"></div>
      </div>

      <div className="container pokemon-card-container">
        <div className="row pokemon-pokedex-titel">
          <div className="col-4"></div>
          {showTeam && (
            <div className="col-4 pt-4 pb-4"><h3 className="chosen-pokemons text-center chosen-pokemon-title pt-2 pb-2">Dit is je team!</h3></div>

          )}
        </div>
        <div className="row">
          {pokemonList.map(pokemon => (
            <div style={{ backgroundColor: getColorFromType(pokemon.type) }} className="col-2 mb-4 mt-2 pokemon-card ">
              <h4 className="text-center pokemon-card-name mt-3" >{pokemon.name}</h4>
              <img id="pokemon-img" className='mx-auto d-block pokemon-card-image' alt="" src={pokemon.img} />

              <div className="row mt-3">
                <div className="col-6">
                  <h6 className="pokemon-card-attack-value text-center"> {pokemon.attack}</h6>
                  <p className="pokemon-card-attack text-center">ATTACK</p>
                </div>
                <div className="col-6">
                  <h6 className="pokemon-card-hitpoints-value text-center"> {pokemon.hp}</h6>
                  <p className="pokemon-card-hitpoints text-center">HITPOINTS</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showTeam && (
        <div className="container space-between-element-middle">
          <div className="row space-between-elements-top"></div>
          <div className="row space-between-elements-bottom"></div>
        </div>
      )}

      <Footer />
    </div>

  );
}

export default App;
