
fetch('http://sandipbgt.com/theastrologer/api/sunsigns/', function(response){
    console.log(response);
    response.map((element, i) => {
        signs[i] = element;
    });

});

let signs = {};
console.log(signs)
