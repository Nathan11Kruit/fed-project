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
      
               
      <div className="home"> 
         <h2 className="home-title pt-5">Kies je Pokemon</h2>
        <div className="h2"></div>

        <div className="row pt">
            <div className="col"> <div className="displaySection">
          {!pokemonChosen ? (<h1></h1>) : (
            <>
          <h1>{pokemon.name}</h1>
          <img alt="" src={pokemon.img}/>
          <h3>Species: {pokemon.species}</h3>
          <h3>Defense: {pokemon.defense}</h3>

          </>
          
          )}
          <div className="col"><input type="text" onChange={(event => {setPokemonName(event.target.value)})}></input></div>
          
          <div className="col pt-3"><button onClick={searchPokemon}>search database</button></div>
          </div></div>
          </div>
            <div className="col"><h2 className='home-title pt-5'>Of gebruik de random generator!</h2></div>

        
        
        
        
       
          
        </div>
      <Footer />
      </div>

    </div>
  );
}

export default App;
