import React from "react";
//import Hero from "../characters/Hero";
import { Link } from "react-router-dom";
import "./styles.css";

const characters = [
  "Hero",
  "Ninja",
  "Pugilist",
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
      <li key={character}>
        <Link to={"/" + character}>
          <div className="box">{character}</div>
        </Link>
      </li>
    ))}
  </ul>
);

export default Classes;
