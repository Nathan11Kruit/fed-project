import './App.css';
import "./navbar.css";
import "./home.css";
import "./footer.css";

import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import { useState } from 'react'; 
import Axios from 'axios';
import { Carousel, CarouselItem, CarouselCaption } from 'bootstrap';



function App() { 
  function randomPokemon(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)  };
    const [pokemonRandom, setPokemonRandom] = useState("");
    function randomNewPokemon(){
    const random = Math.floor(Math.random() * 256 + 1)
    setPokemonRandom(random);;
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${random}`).then((response)=>{
      console.log(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${random}` + `/pngpokemon.img`);
      console.log({random})

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
  function getNumberFromImageSource(imageSource) {
    const regex = /(\d+)/; // regex to match one or more digits
    const match = regex.exec(imageSource);
    return match ? Number(match[0]) : null; // convert the matched string to a number
  }
  function shinySwitch(){
    let displayImage = document.getElementById('pokemon-img')
    const imageSource = displayImage.src;
    const numberFromImageSource = getNumberFromImageSource(imageSource);
    if(displayImage.src.match(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numberFromImageSource}` + `.png`)){
      displayImage.src = (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${numberFromImageSource}` + `.png`)
    } else {
      displayImage.src = (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${numberFromImageSource}` + `.png`)
    }    
  }
  function normalSwitch(){
    let displayImage = document.getElementById('pokemon-img')
    const imageSource = displayImage.src;
    const numberFromImageSource = getNumberFromImageSource(imageSource);
    if(displayImage.src.match(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${numberFromImageSource}` + `.png`)){
      displayImage.src = (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numberFromImageSource}` + `.png`)
    } else {
      displayImage.src = (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numberFromImageSource}` + `.png`)
    }
  }
    // create fields
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
// search pokemon in database by name
const searchPokemon = () => { 
  Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response)=>{
    console.log(pokemonName)
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
        <div className="row landing-image">   
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">   
  <div className="carousel-item active">
      <img className="d-block w-100" src="https://static.onecms.io/wp-content/uploads/sites/6/2022/12/16/Pokemon-121622-1.jpg" alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://images3.alphacoders.com/975/975819.jpg" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="..." alt="Third slide" />
    </div>
            <div className="col-6 mt-6"> 
              <div className="landing-image-text-field">
              <h2 className="home-title pt-5">Kies je favoriete Pokemon</h2>
                <div className="row pt-3">
                <div className="col-2"></div>
                  <div className="col-5"><input placeholder="Pokemon naam" className="form-control pokemon-name-input" type="text" onChange={(event => {setPokemonName(event.target.value);})}></input></div>              
                  <div className="col-3"><button type="button" className="btn btn-danger" onClick={searchPokemon}>Zoek Pokemon</button></div>
                </div>              
                <h2 className='home-title pt-5 pb-3'>Weet je nog niet wie je favoriet is? Gebruik dan de knop hieronder!</h2>
                <button type="button" className="btn btn-warning mb-3 random-pokemon-btn"  onClick={event => {randomNewPokemon();   }}   >Willekeurige pokemon kiezen!</button>
              </div> 
             </div>          
          </div>
          </div> 
        </div>            
      </div>
      <div className="container pokemon-pokedex pb-5">
        <div className="row pokemon-pokedex-titel pt-2 pb-2">
          <div className="col"><h3 className="text-center chosen-pokemon-title">Gekozen Pokemon</h3></div>
        </div>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-3 mt-5 pokemon-info">
            <ul className="pt-2">
              <li className="pokemon-info-list-title pokemon-species"><h3 className='text-center'>{pokemon.name}</h3></li>
              <li className="pokemon-info-list-item pokemon-image"><img id="pokemon-img" className='mx-auto d-block' height="200" alt="" src={pokemon.img}/></li>
              <li className="pokemon-info-list-item pokemon-image-shiny mb-4 mx-auto text-center img-fluid"><button className="switch btn btn-primary" onClick={shinySwitch}>Shiny</button><button className="switch btn btn-info" onClick={normalSwitch}>Normal</button></li>
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
    </div>

  );
}

export default App;
