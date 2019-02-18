import React from "react";
import { isArray, isNumber, formatCamelCase } from "./dataFormat";

const SkillTable = ({ skill }) => {
  const lvlSkills = skill.levels;

  return (
    <table className="table is-bordered is-narrow is-hoverable">
      <thead>
        <tr>
          <th />
          {[...Array(lvlSkills.total)].map((x, index) => (
            <th key={index}>{index + 1}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.keys(lvlSkills)
          .filter(key => key !== "total")
          .map((key, index) => (
            <tr key={key + index}>
              <th>{formatCamelCase(lvlSkills, index)}</th>
              {isArray(lvlSkills[key])}
              {isNumber(lvlSkills[key], lvlSkills.total)}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default SkillTable;
