const pokeType = function(starsign) {
  switch (starsign) {
    case "aries":
      return "fire";
      break;
    case "taurus":
      return "rock";
      break;
      break;
    case "gemini":
      return "dragon";
      break;
      break;
    case "cancer":
      return "ghost";
      break;
      break;
    case "leo":
      return "normal";
      break;
      break;
    case "virgo":
      return "grass";
      break;
      break;
    case "libra":
      return "psychic";
      break;
      break;
    case "scorpio":
      return "poison";
      break;
      break;
    case "sagittarius":
      return "flying";
      break;
      break;
    case "capricorn":
      return "ground";
      break;
      break;
    case "aquarius":
      return "ice";
      break;
      break;
    case "pisces":
      return "water";
      break;
    default:
      console.log("the switch case isn't working properly");
      return "error";
  }
};
