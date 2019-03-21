const test = require("tape");
const getPokeUrlFromType = require("../getPokeUrlFromType.js");
const type = require("./typeJson.js");

const typeJson = type();

test("getPokeUrlFromType should return a url in string format", t => {
  const actual = getPokeUrlFromType(typeJson);
  t.equals(
    typeof actual,
    "string",
    "should get a string from getPokeUrlFromType"
  );
  t.equals(
    actual.substr(0, 8),
    "https://",
    "should get https:// by checking first eight figures of result"
  );
  t.equals(
    actual.substr(0, 34),
    "https://pokeapi.co/api/v2/pokemon/",
    "should get full url minus end numbers"
  );
  t.end();
});
