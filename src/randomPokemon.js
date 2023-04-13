 function randomNewPokemon() { 
      const min = 1;
      const max = 1008;
      const random = Math.floor(Math.random() * (max - min + 1)) + min;
      setPokemonRandom(random);
      Axios.get(`https://pokeapi.co/api/v2/pokemon/${random}`).then((response) => {
        console.log(pokemonList)
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

export { randomNewPokemon };
