addListener("form", "submit", function(e) {
  e.preventDefault();

  let selectedSign = document.getElementById("zodiac_drop").value;
  let url = `https://cors-anywhere.herokuapp.com/http://sandipbgt.com/theastrologer/api/horoscope/${selectedSign}/today`;
  let stats = document.querySelector(".statText");
  stats.textContent = "";

  // update desc with first two lines of horoscope message
  fetch(url, function(response) {
    let horoscopeText = document.querySelector(".horoscopeText");
    let responseSplit = response.horoscope.split(/[?!.]/g);
    let join = responseSplit[0] + "." + responseSplit[1] + "!";
    horoscopeText.textContent = join.trim();

    // battle stats from the nested meta object
    let horoKeys = Object.keys(response.meta);
    let horoVals = Object.values(response.meta);
    for (let i = 0; i < horoKeys.length; i++) {
      let listElem = document.createElement("li");
      listElem.textContent += horoKeys[i] + ": " + horoVals[i];
      stats.appendChild(listElem);
    }
  });

  //returns and populates zodiac type

  zodiacType(selectedSign, function(type) {
    let typeInput = document.querySelector(".zodiacType");
    typeInput.textContent = type;
  });
});
