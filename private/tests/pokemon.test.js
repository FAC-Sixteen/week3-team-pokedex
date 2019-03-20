const test = require("tape");
const getPokeUrlFromType = require("../getPokeUrlFromType.js");
const type = require("./typeJson.js");

const typeJson = type();

test("testing that getPokeUrlFromType returns string", t => {
  const actual = typeof getPokeUrlFromType(typeJson);
  const expected = "string";
  t.equals(actual, expected, "should get a string from getPokeUrlFromType");
  t.end();
});

test("getPokeUrlFromType returns string with layout of url", t => {
  const actual = getPokeUrlFromType(typeJson).substr(0, 8);
  const expected = "https://";
  t.equals(
    actual,
    expected,
    "should get https:// by checking first eight figures of result"
  );
  t.end();
});

test("getPokeUrlFromType returns string of url from fed in json", t => {
  const actual = getPokeUrlFromType(typeJson).substr(0, 34);
  const expected = "https://pokeapi.co/api/v2/pokemon/";
  t.equals(actual, expected, "should get full url minus end numbers");
  t.end();
});
