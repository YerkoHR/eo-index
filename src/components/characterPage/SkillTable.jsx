import React from "react";
//import { isArray, isNumber, formatCamelCase } from "./dataFormat";

const SkillTable = ({ skill }) => {
  const isNumber = skill =>
    Number.isInteger(skill) && <td colSpan={skill.total}>{skill}</td>;
  const isArray = skill => {
    return Array.isArray(skill)
      ? skill.map(value => <td> {value + isInt(value)} </td>)
      : Object.keys(skill).map(value => (
          <td colSpan={value}>{skill[value]}</td>
        ));
  };
  const isInt = number => (number % 1 === 0 ? "%" : "x");
  const formatCamelCase = (skill, index) =>
    Object.keys(skill)
      .filter(key => key !== "total")
      [index].replace(/([A-Z])/g, " $1")
      .replace(/^./, str => str.toUpperCase());
  return (
    <table class="table is-bordered is-narrow is-hoverable">
      <thead>
        <tr>
          <th />
          {[...Array(skill.levels.total)].map((x, index) => (
            <th>{index + 1}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.keys(skill.levels)
          .filter(key => key !== "total")
          .map((key, index) => (
            <tr>
              <th>{formatCamelCase(skill.levels, index)}</th>
              {isArray(skill.levels[key])}
              {isNumber(skill.levels[key])}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default SkillTable;
