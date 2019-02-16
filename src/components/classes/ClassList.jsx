import React from "react";
import "./styles.css";

const characters = [
  "Hero",
  "Ninja",
  "Pugilist",
  "Sovereign",
  "Protector",
  "Farmer",
  "Gunner",
  "Arcanist",
  "Harbinger",
  "Highlander",
  "Imperial",
  "Landsknecht",
  "Protector",
  "Ronin",
  "Shogun",
  "Sovereign",
  "Survivalist",
  "War Magus",
  "Zodiac"
].sort();

const Classes = () => (
  <ul>
    {characters.map(character => (
      <li>
        <div className="box">{character}</div>
      </li>
    ))}
  </ul>
);

export default Classes;
