// fetch from API on load event, creates sign object.

fetch('http://sandipbgt.com/theastrologer/api/sunsigns/', function(response){
    response.map((element, i) => {
        signs[i] = element;
    });
// posterity: seems to work inside function, uncomment below to "see";
// let form = document.querySelector("option");
// form.textContent = signs;
});
let signs = {};

// populate the html with signs object

let form = document.querySelector("option");
let values = Object.keys(signs);

form.textContent = values[0];

console.log(values);
