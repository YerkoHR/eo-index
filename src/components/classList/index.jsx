import React from "react";
import { Link } from "react-router-dom";
import characters from "./classes";
import "./styles.css";

const ClassList = () => (
  <ul>
    {characters.map(character => (
      <li key={character}>
        <Link to={"/class/" + character}>
          <div className="box">{character}</div>
        </Link>
      </li>
    ))}
  </ul>
);

export default ClassList;
