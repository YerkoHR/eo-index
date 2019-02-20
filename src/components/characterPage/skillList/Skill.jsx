import React from "react";
import SkillTable from "./SkillTable";

const Skill = ({ skill }) => {
  const req = skill.requeriments;

  return (
    <div className="content is-small skill-container">
      <h2 className="subtitle"> {skill.name}</h2>
      <p> {skill.description}</p>
      <div className="tags">
        <span className="tag">{skill.type}</span>
        {skill.bodyPartsUsed && (
          <span className="tag">{skill.bodyPartsUsed}</span>
        )}
        {req && (req.weapon && <span className="tag">{req.weapon}</span>)}
        {req &&
          (req.skill &&
            (Array.isArray(req.skill) ? (
              req.skill.map(arrayReq => (
                <span className="tag" key={arrayReq.name}>
                  {arrayReq.name + " " + arrayReq.level}
                </span>
              ))
            ) : (
              <span className="tag">{req.skill + " " + req.level}</span>
            )))}
      </div>
      {skill.type !== "Gathering" && <SkillTable skill={skill} />}
    </div>
  );
};

export default Skill;
