// import { fetch } from "../api_function";
// import { getPokeUrlFromType } from "../private/getPokeUrlFromType";
(function() {
  console.log("running on start");
  document
    .querySelector("#pokeSubmit")
    .addEventListener("click", function(event) {
      event.preventDefault();
      console.log("this is running");
      pokeDomOnClick("Gemini");
    });
})();

const pokeDomOnClick = function(starsign) {
  const node = document.createElement("p");
  const elementName = document.querySelector(".heightText");
  const elementType = document.querySelector(".weightText");
  const elementImage = document.querySelector(".pokeImage");
  const type = pokeType(starsign);
  fetch("https://pokeapi.co/api/v2/type/" + type, function(response) {
    const url = getPokeUrlFromType(response);
    fetch(url, function(response) {
      const array = getPokeDetails(response);
      elementName.textContent = array[0];
      elementType.textContent = type;
      elementImage.src = array[1];
      elementImage.alt = "Image of " + array[0];
    });
  });
};
