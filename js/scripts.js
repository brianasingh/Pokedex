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

  function add(pokemonAdd) {
    pokemonList.push(pokemonAdd);
  }

  return {
    getAll: getAll,
    add: add
  };

})();
//IIFE ends

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
});
