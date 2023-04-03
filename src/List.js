import React, { useState } from 'react';

function List() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  function handleClick() {
    setItems(prevItems => [...prevItems, newItem]);
    setNewItem('');
  }

  return (
    
      <div className="col-1">
  <ul className="pt-2">    

        {items.map(item => (
            <>
            <li className="pokemon-info-list-title pokemon-species"><h3 className='text-center'>test</h3></li>
            <li className="pokemon-info-list-item pokemon-image"><img id="pokemon-img" className='mx-auto d-block' height="200" alt="" src=""/></li>
             </>

        ))}
      </ul>
      <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)} />
      <button onClick={handleClick}>Add Item</button>
    </div>
  );
}

dit werkte best goed::

const [results, setResults] = useState([]);
const handleClick = () => {
  const newResult = randomNewPokemon();
  setResults(prevResults => [...prevResults, newResult]);
};

{results.map((result, index) => (
    <li key={index}>{result}</li>
  ))}
// old functions
function randomNewPokemon() { 
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


  function randomNewPokemon(){
    
  const random = Math.floor(Math.random() * 256 + 1)
  setPokemonRandom(random);
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
    setPokemonList([...pokemonList, pokemon]);
  }
  );    
}; 
export default List;