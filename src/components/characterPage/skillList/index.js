import React from "react";
import Skill from "./Skill";
import SkillForce from "./SkillForce";

import "./styles.css";

export const expertise = ["novice", "veteran", "master"];

const SkillList = ({ character }) => {
  return (
    <>
      <SkillForce character={character} />
      {expertise.map(level => (
        <section className="section section-char" id={level} key={level}>
          <h1 className="title ">
            {level.replace(/^./, str => str.toUpperCase())}
          </h1>
          {character[level].map(skill => (
            <div key={skill.name} id={skill.name}>
              <Skill skill={skill} name={character.name} />
            </div>
          ))}
        </section>
      ))}
    </>
  );
};
export default SkillList;
