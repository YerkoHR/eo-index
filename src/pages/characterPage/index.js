import React from "react";
import reducer from "./reducer";
import Layout from "../../components/Layout";
import SkillList from "./skillList";
import Menu from "./menu";
import ToTopBtn from "./toTopBtn";
import NotFound from "../../pages/NotFound";

const CharacterPage = ({ match, location }) => {
  const character = reducer(match.params.character);

  return (
    <>
      {character ? (
        <Layout title={character.name} subTitle="Class">
          <div className="grid">
            <div className="grid__left">
              <Menu character={character} />
            </div>
            <div className="grid__right">
              <SkillList character={character} />
            </div>
          </div>
          <ToTopBtn characterName={character.name} />
        </Layout>
      ) : (
        <NotFound location={location} />
      )}
    </>
  );
};

export default CharacterPage;
