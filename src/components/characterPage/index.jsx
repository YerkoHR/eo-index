import React from "react";
import reducer from "./reducer";
import Layout from "../Layout";
import SkillTable from "./SkillTable";

import "./styles.css";

const CharacterPage = ({ match }) => {
  const character = reducer(match.params.character);

  return (
    <Layout>
      {character.novice.map(skill => (
        <div key={skill.name}>
          <div className="content is-small">
            <h1> {skill.name}</h1>
          </div>
          {skill.type !== "Gathering" && <SkillTable skill={skill} />}
        </div>
      ))}
    </Layout>
  );
};

export default CharacterPage;
