import React from "react";
import { Link } from "react-router-dom";
import characters from "./classes";

const ClassList = () => (
  <ul className="boxList">
    {characters.map(character => (
      <li key={character}>
        <Link to={"/" + character}>
          <div className="box boxList__item">{character}</div>
        </Link>
      </li>
    ))}
  </ul>
);

export default ClassList;
