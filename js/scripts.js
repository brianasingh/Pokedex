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

];


for (let i=0; i < pokemonList.length; i++)
  if(pokemonList[i].height < 7 && pokemonList[i].height > 4) {
    document.write(pokemonList[i].name + ": is on the smaller side.")
  } else {
    document.write(pokemonList[i].name + ": wow, that's big!")
  };
