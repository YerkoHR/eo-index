import React from "react";

// Receive a number, if it's int returns %, if it's float returns x (indicating a multiplicative relation).

const isInt = number => (number % 1 === 0 ? "%" : "x");

// Receive a skill and the total of levels, check if it's an integer,
// apply colspan equal to the total and apply formatting.

export const isNumber = (lvSkill, total) =>
  Number.isInteger(lvSkill) && (
    <td colSpan={total}>{lvSkill + isInt(lvSkill)}</td>
  );

// Receive a skill, check if it's an object or array,
// loop through the elements and manage colspan + formatting.

export const isArray = lvSkill => {
  return Array.isArray(lvSkill)
    ? lvSkill.map(value => <td key={value}> {value + isInt(value)} </td>)
    : Object.keys(lvSkill).map(value => (
        <td colSpan={value} key={value}>
          {lvSkill[value]}
        </td>
      ));
};

// Receive an object with skills that have levels and an index,
// it returns the name of the skill from camel case to uppercase with spaces.

export const formatCamelCase = (lvSkill, index) => {
  const filteredSkills = Object.keys(lvSkill).filter(key => key !== "total");

  return filteredSkills[index]
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, str => str.toUpperCase());
};
