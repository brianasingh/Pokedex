// IIFE begins
let pokemonRepository = (function(pokemon) {
  pokemonList = [{
      name: "Bulbasaur",
      height: 7,
      type: ["Monster", "Grass"]
    },

    {
      name: "Jigglypuff",
      height: 5,
      type: ["Fairy"]
    },

    {
      name: "Squirtle",
      height: 5,
      type: ["Monster", "Water"]
    }
  ]


  function pokemonType(pokemon) {
    console.log('This pokemon is a ' + pokemon.type + ' . ')
  }

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemonAdd);
  }

  function showDetails(pokemon) {
    console.log(`This is a ${pokemon.name} , `)
  }

  return {
    getAll: getAll,
    add: add,
    showDetails: showDetails
  };


})();
// IIFE ends

/* for (let i = 0; i < pokemonList.length; i++)
  if (pokemonList[i].height < 7 && pokemonList[i].height > 4) {
    document.write(pokemonList[i].name + ": is on the smaller side.")
  } else {
    document.write(pokemonList[i].name + ": wow, that's big!")
  };
*/


// forEach loop -- find out what comes after function
pokemonRepository.getAll().forEach(function(pokemon) {
  console.log(pokemon.name + ' is ' + pokemon.height + ' tenths meters high.');
  let pokemonListUL = document.querySelector('.pokemon-list');
  let listPokemon = document.createElement('li');
  let button = document.createElement('button');
  button.innerText = (pokemon.name);
  button.classList.add('button-class');
  button.addEventListener('click' , pokemonRepository.showDetails(pokemon));
  listPokemon.appendChild(button);
  pokemonListUL.appendChild(listPokemon);
});
