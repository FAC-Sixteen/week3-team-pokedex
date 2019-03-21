const test = require("tape");
const getPokeDetails = require("../getPokeDetails.js");
const poke = require("./pokemonJson.js");

const pokeJson = poke();

test("getPokeDetails should return an array of name and url", function(t) {
  const actual = getPokeDetails(pokeJson);
  t.equals(Array.isArray(actual), true, "getPokeDetails should return array");
  t.equals(
    actual.length,
    2,
    "getPokeDetails should return an array of length two"
  );
  t.equals(
    actual[0],
    "pidgey",
    "getPokeDetails index 0 should be name of a pokemon"
  );
  const expectedUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png";
  t.equals(actual[1], expectedUrl, "getPokeDetails index 1 should be a url");
  t.end();
});
