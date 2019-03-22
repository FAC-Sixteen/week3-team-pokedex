// import { fetch } from "../apiFunction";
// import { getPokeUrlFromType } from "../private/getPokeUrlFromType";
(function() {
  console.log("running on start");
  document
    .querySelector("form")
    .addEventListener("submit", function(event) {
      event.preventDefault();
      const sign = document.querySelector("#zodiac_drop").value;
      pokeDomOnClick(sign);
    });
})();

const pokeDomOnClick = function(starsign) {
  const node = document.createElement("p");
  const elementName = document.querySelector(".pokeNameText");
  const elementType = document.querySelector(".pokeTypeText");
  const elementImage = document.querySelector(".pokeImage");
  const type = pokeType(starsign);
  elementImage.style.animation = '';

  fetch("https://pokeapi.co/api/v2/type/" + type, function(response) {
    const url = getPokeUrlFromType(response);
    fetch(url, function(response) {
      const array = getPokeDetails(response);
      if (array[1] === null) {
        pokeDomOnClick(starsign);
      } else {
        elementName.textContent = array[0];
        elementType.textContent = type;
        elementImage.src = array[1];
        elementImage.style.animation =  "shake 0.82s cubic-bezier(.36,.07,.19,.97) both";
        elementImage.alt = "Image of " + array[0];
  
      }
    });
  });
};
