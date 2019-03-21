// const randomNumberGen = require("./randomNumberGen.js");

const getPokeUrlFromType = function(json) {
  const pokeIndex = randomNumberGen(json.pokemon.length);
  return json.pokemon[pokeIndex].pokemon.url;
};

const randomNumberGen = function(range) {
  return Math.floor(Math.random() * range);
};

if (typeof module !== "undefined") {
  module.exports = getPokeUrlFromType;
}
