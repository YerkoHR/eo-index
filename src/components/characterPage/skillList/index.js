import React from "react";
import Skill from "./Skill";
import "./styles.css";

export const expertise = ["novice", "veteran", "master"];

const SkillList = ({ character }) => {
  return (
    <>
      {expertise.map(level => (
        <section className="section expertise" id={level} key={level}>
          <h1 className="title ">
            {level.replace(/^./, str => str.toUpperCase())}
          </h1>
          {character[level].map(skill => (
            <div key={skill.name} id={skill.name}>
              <Skill skill={skill} />
            </div>
          ))}
        </section>
      ))}
    </>
  );
};
export default SkillList;
