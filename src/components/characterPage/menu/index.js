import React from "react";
import "./styles.css";

const Menu = ({ character }) => {
  return (
    <aside className="menu">
      <p className="menu-label">classes</p>
      <ul className="menu-list">
        <li>
          <a href="#novice">Novice</a>
        </li>
        <li>
          <ul>
            {character.novice.map(skill => (
              <li key={skill.name}>
                <a href={"#" + skill.name}>{skill.name}</a>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <a href="#veteran">Veteran</a>
        </li>
        <li>
          <ul>
            {character.veteran.map(skill => (
              <li key={skill.name}>
                <a href={"#" + skill.name}>{skill.name}</a>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <a href="#master">Master</a>
        </li>
        <li>
          <ul>
            {character.master.map(skill => (
              <li key={skill.name}>
                <a href={"#" + skill.name}>{skill.name}</a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default Menu;
