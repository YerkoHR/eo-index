import React from "react";
import SkillTable from "./SkillTable";

const Skill = ({ skill }) => (
  <div className="content is-small skill-container">
    <h2 className="subtitle"> {skill.name}</h2>
    <p> {skill.description}</p>
    <div className="tags">
      <span className="tag">{skill.type}</span>
      {skill.bodyPartsUsed && (
        <span className="tag">{skill.bodyPartsUsed}</span>
      )}
    </div>
    {skill.type !== "Gathering" && <SkillTable skill={skill} />}
  </div>
);

export default Skill;
