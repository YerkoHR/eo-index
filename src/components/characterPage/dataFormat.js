import React from "react";

const isInt = number => (number % 1 === 0 ? "%" : "x");

export const formatCamelCase = (skill, index) =>
  Object.keys(skill)
    .filter(key => key !== "total")
    [index].replace(/([A-Z])/g, " $1")
    .replace(/^./, str => str.toUpperCase());

export const isArray = skill => {
  return Array.isArray(skill)
    ? skill.map(value => <td> {value + isInt(value)} </td>)
    : Object.keys(skill).map(value => <td colSpan={value}>{skill[value]}</td>);
};

//export const isNumber = skill =>
//  Number.isInteger(skill) && <td colSpan={levels.total}>{skill}</td>;
