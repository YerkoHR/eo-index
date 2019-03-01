import React from "react";
import { expertise } from "../skillList/index";

const Menu = ({ character }) => {
  const scrollTo = id =>
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });

  return (
    <aside className="menu">
      <p className="menu-label">Skills</p>
      <ul className="menu-list">
        {expertise.map(level => (
          <div key={level}>
            <li>
              <button className="menu-item" onClick={() => scrollTo(level)}>
                {level.replace(/^./, str => str.toUpperCase())}
              </button>
            </li>
            <li>
              <ul>
                {character[level].map(skill => (
                  <li key={skill.name}>
                    <button
                      className="menu-item"
                      onClick={() => scrollTo(skill.name)}
                    >
                      {skill.name}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          </div>
        ))}
      </ul>
    </aside>
  );
};

export default Menu;
