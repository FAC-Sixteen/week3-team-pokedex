const test = require("tape");
const api = require("./api_function");
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function callback(){
    return 1
}

test("Example test", function(t){
    t.pass();
    t.end();
});

test("Testing api call returns a result", t => {
    const actual = api("https://pokeapi.co/api/v2/pokemon/1", callback)
    const expected = 1

    t.equals(actual, expected, "fetch has returned 1");
    t.end();
})