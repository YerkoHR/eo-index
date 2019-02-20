import React from "react";
const uuidv4 = require("uuid/v4");

// Receive a number, if it's int returns %, if it's float returns x (indicating a multiplicative relation).

const isInt = number => (number % 1 === 0 ? "%" : "x");

// Receive a skill and the total of levels, check if it's an integer,
// apply colspan equal to the total and apply formatting.

export const isNumber = (lvSkill, total) =>
  Number.isInteger(lvSkill) && (
    <td colSpan={total}>{lvSkill + isInt(lvSkill)}</td>
  );

export const isString = (lvSkill, total) =>
  typeof lvSkill === "string" && <td colSpan={total}>{lvSkill}</td>;

// Receive a skill, check if it's an object or array,
// loop through the elements and manage colspan + formatting.

export const isDynamicScaling = (lvSkill, total) => {
  return (
    Array.isArray(lvSkill) &&
    (lvSkill.length < total
      ? lvSkill.map(skill => (
          <td colSpan={skill.colspan} key={uuidv4()}>
            {skill.value}
          </td>
        ))
      : lvSkill.map(value => <td key={uuidv4()}> {value + isInt(value)} </td>))
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
