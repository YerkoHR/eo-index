import React from "react";
import reducer from "./reducer";
import Layout from "../Layout";
import SkillTable from "./SkillTable";

import "./styles.css";
// create a layout for characters since the only thing that changes is the data.

const CharacterPage = ({ match }) => {
  const character = reducer(match.params.character);

  //return <div>{JSON.stringify(character.novice[0])}</div>;

  return (
    <Layout>
      {character.novice.map(skill => (
        <div>
          <div className="content is-small">
            <h1> {skill.name}</h1>
          </div>
          {skill.levels && <SkillTable skill={skill} />}
        </div>
      ))}
    </Layout>
  );
};

export default CharacterPage;
