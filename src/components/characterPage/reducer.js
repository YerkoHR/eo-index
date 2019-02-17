import hero from "../../data/hero";
import ninja from "../../data/ninja";
import arcanist from "../../data/arcanist";
import farmer from "../../data/farmer";
import gunner from "../../data/gunner";
import harbinger from "../../data/harbinger";
import highlander from "../../data/highlander";
import imperial from "../../data/imperial";
import landsknecht from "../../data/landsknecht";
import medic from "../../data/medic";
import nightseeker from "../../data/nightseeker";
import protector from "../../data/protector";
import pugilist from "../../data/pugilist";
import ronin from "../../data/ronin";
import shogun from "../../data/shogun";
import sovereign from "../../data/sovereign";
import survivalist from "../../data/survivalist";
import warMagus from "../../data/warMagus";
import zodiac from "../../data/zodiac";

const reducer = props => {
  switch (props) {
    case "Hero":
      return hero;
    case "Ninja":
      return ninja;
    case "Arcanist":
      return arcanist;
    case "Farmer":
      return farmer;
    case "Gunner":
      return gunner;
    case "Harbinger":
      return harbinger;
    case "Highlander":
      return highlander;
    case "Imperial":
      return imperial;
    case "Landsknecht":
      return landsknecht;
    case "Medic":
      return medic;
    case "Nightseeker":
      return nightseeker;
    case "Protector":
      return protector;
    case "Pugilist":
      return pugilist;
    case "Ronin":
      return ronin;
    case "Shogun":
      return shogun;
    case "Sovereign":
      return sovereign;
    case "Survivalist":
      return survivalist;
    case "War Magus":
      return warMagus;
    case "Zodiac":
      return zodiac;
    default:
      return;
  }
};

export default reducer;
