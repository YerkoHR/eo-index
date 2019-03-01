import React from "react";
const uuidv4 = require("uuid/v4");

// Receive a skill, check if it's an object or array,
// loop through the elements and manage colspan + formatting.

export const isDynamicScaling = (lvSkill, total) => {
  return Array.isArray(lvSkill) ? (
    lvSkill.length < total ? (
      lvSkill.map(skill => (
        <td colSpan={skill.colspan} key={uuidv4()}>
          {skill.value}
        </td>
      ))
    ) : (
      lvSkill.map(value => <td key={uuidv4()}>{value}</td>)
    )
  ) : (
    <td key={uuidv4()} colSpan={total}>
      {lvSkill}
    </td>
  );
};

// Receive an object with skills that have levels and an index,
// it returns the name of the skill from camel case to uppercase with spaces.

export const formatCamelCase = (lvSkill, index) => {
  const filteredSkills = Object.keys(lvSkill).filter(key => key !== "total");

  return filteredSkills[index]
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, str => str.toUpperCase());
};
