// fetch from API on load event, creates sign object.

fetch('http://sandipbgt.com/theastrologer/api/sunsigns/', function(response){
  
    response.map((element, i) => {
        signs[i] = element;
    });

// populate the html with signs object
    const form = document.querySelector("select");

    for (let i = 0; i < Object.keys(signs).length; i++){
        let listItem = document.createElement('option');
        listItem.textContent = signs[i];
        form.appendChild(listItem);
    }
});

const signs = {};




