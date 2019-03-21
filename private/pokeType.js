const pokeType = function(starsign) {
  const which = whichType();
  switch (starsign) {
    case "aries":
      if (which == 0) {
        return "fire";
      } else {
        return "fighting";
      }
      break;
    case "taurus":
      if (which == 0) {
        return "rock";
      } else {
        return "steel";
      }
      break;
    case "gemini":
      if (which == 0) {
        return "dragon";
      } else {
        return "fairy";
      }
      break;
    case "cancer":
      if (which == 0) {
        return "ghost";
      } else {
        return "dark";
      }
      break;
    case "leo":
      return "normal";
      break;
    case "virgo":
      if (which == 0) {
        return "grass";
      } else {
        return "bug";
      }
      break;
    case "libra":
      return "psychic";
      break;
    case "scorpio":
      if (which == 0) {
        return "poison";
      } else {
        return "electric";
      }
      break;
    case "sagittarius":
      return "flying";
      break;
    case "capricorn":
      return "ground";
      break;
    case "aquarius":
      return "ice";
      break;
    case "pisces":
      return "water";
      break;
    default:
      console.log("the switch case isn't working properly");
      return "error";
  }
};

const whichType = function() {
  return Math.floor(Math.random() * 2);
};
