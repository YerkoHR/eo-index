import React from "react";
import reducer from "./reducer";
import Layout from "../Layout";
import SkillList from "./skillList";
import Menu from "./menu";
import ToTopBtn from "./toTopBtn";

import "./styles.css";

const CharacterPage = ({ match }) => {
  const character = reducer(match.params.character);

  return (
    <Layout title={character.name} subTitle="Class">
      <div className="page-container">
        <div className="left">
          <Menu character={character} />
        </div>
        <div className="right">
          <SkillList character={character} />
        </div>
      </div>
      <ToTopBtn characterName={character.name} />
    </Layout>
  );
};

export default CharacterPage;
