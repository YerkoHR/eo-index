import React from "react";
import SkillTable from "./SkillTable";

const Skill = ({ skill }) => (
  <div className="content is-small">
    <h1> {skill.name}</h1>
    {skill.type !== "Gathering" && <SkillTable skill={skill} />}
  </div>
);

export default Skill;
