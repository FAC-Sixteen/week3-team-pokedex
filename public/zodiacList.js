// fetch from API on load event, creates sign object.

fetch(
  "https://cors-anywhere.herokuapp.com/http://sandipbgt.com/theastrologer/api/sunsigns/",
  function(response) {
    response.map((element, i) => {
      signs[i] = element;
    });

    // populate the html with signs object + aria labels for respective option
    const form = document.querySelector("select");

    for (let i = 0; i < Object.keys(signs).length; i++) {
      let listItem = document.createElement("option");
      listItem.textContent = signs[i];
      listItem.setAttribute(
        "aria-label",
        "list option: " + listItem.textContent
      );
      form.appendChild(listItem);
    }
  }
);

const signs = {};
