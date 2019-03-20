const randomNumberGen = function(range) {
  return Math.floor(Math.random() * range);
};

if (typeof module !== "undefined") {
  module.exports = randomNumberGen;
}
