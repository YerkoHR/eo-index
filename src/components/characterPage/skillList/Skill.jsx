import React from "react";
import SkillTable from "./SkillTable";

const Skill = ({ skill, name }) => {
  const req = skill.requeriments;

  return (
    <div className="content is-small skill-container">
      <h2 className="subtitle"> {skill.name}</h2>
      <p> {skill.description}</p>
      <div className="tags">
        <span className={"tag " + name}>{skill.type}</span>
        {skill.bodyPartsUsed && (
          <span className={"tag " + name}>{skill.bodyPartsUsed}</span>
        )}
        {req &&
          (req.weapon && <span className={"tag " + name}>{req.weapon}</span>)}
        {req &&
          (req.skill &&
            (Array.isArray(req.skill) ? (
              req.skill.map(arrayReq => (
                <span className={"tag " + name} key={arrayReq.name}>
                  {arrayReq.name + " " + arrayReq.level}
                </span>
              ))
            ) : (
              <span className={"tag " + name}>
                {req.skill + " " + req.level}
              </span>
            )))}
      </div>
      {skill.type !== "Gathering" && <SkillTable skill={skill} />}
    </div>
  );
};

export default Skill;
