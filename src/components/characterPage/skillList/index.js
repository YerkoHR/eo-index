import React from "react";
import Skill from "./Skill";
import "./styles.css";

const SkillList = ({ character }) => {
  const expertise = ["novice", "veteran", "master"];

  return (
    <>
      {expertise.map(level => (
        <div id={level} key={level}>
          <h1>{level.replace(/^./, str => str.toUpperCase())}</h1>
          {character[level].map(skill => (
            <div key={skill.name} id={skill.name}>
              <Skill skill={skill} />
            </div>
          ))}
        </div>
      ))}
    </>
  );
};
export default SkillList;
