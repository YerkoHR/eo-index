import React from "react";
import "./styles.css";

const characters = ["Hero", "Ninja", "Pugilist", "Sovereign", "Protector"];

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
