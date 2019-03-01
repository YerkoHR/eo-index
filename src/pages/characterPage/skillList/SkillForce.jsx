import React from "react";
import SkillTable from "./SkillTable";

const SkillForce = ({ character }) => {
  const force = ["boost", "break"];

  return (
    <div className="section section__info">
      <div className="content is-small">
        {force.map(type => (
          <div className="container-force" key={type}>
            <h2 className="subtitle">
              {`Force ${type}:  ${character.force[type].name}`}
            </h2>
            <p>{character.force[type].description}</p>
            {character.force[type].levels && (
              <SkillTable skill={character.force[type]} />
            )}
            {character.force[type].bodyPartsUsed && (
              <span className={"tag " + character.name}>
                {character.force[type].bodyPartsUsed}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillForce;
