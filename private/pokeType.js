const pokeType = function(starsign) {
  switch (starsign) {
    case "Aries":
      return "fire";
      break;
    case "Taurus":
      return "rock";
      break;
      break;
    case "Gemini":
      return "dragon";
      break;
      break;
    case "Cancer":
      return "ghost";
      break;
      break;
    case "Leo":
      return "normal";
      break;
      break;
    case "Virgo":
      return "grass";
      break;
      break;
    case "Libra":
      return "psychic";
      break;
      break;
    case "Scorpio":
      return "poison";
      break;
      break;
    case "Sagittarius":
      return "flying";
      break;
      break;
    case "Capricorn":
      return "ground";
      break;
      break;
    case "Aquarius":
      return "ice";
      break;
      break;
    case "Pisces":
      return "water";
      break;
    default:
      console.log("the switch case isn't working properly");
      return "error";
  }
};
