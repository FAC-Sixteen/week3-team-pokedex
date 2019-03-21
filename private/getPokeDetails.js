const getPokeDetails = function(json) {
  return [json.name, json.sprites.front_default];
};

if (typeof module !== "undefined") {
  module.exports = getPokeDetails;
}
