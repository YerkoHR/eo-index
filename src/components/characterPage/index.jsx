import React, { useEffect } from "react";
import reducer from "./reducer";
import Layout from "../Layout";
import SkillTable from "./SkillTable";
import Menu from "./Menu";

import "./styles.css";

const CharacterPage = ({ match }) => {
  const character = reducer(match.params.character);

  const expertise = ["novice", "veteran", "master"];

  useEffect(() => {
    window.onscroll = () => {
      if (document.documentElement.scrollTop > 500) {
        document.getElementById("myBtn").style.display = "block";
      } else {
        document.getElementById("myBtn").style.display = "none";
      }
    };
  });

  const scrollTo = () =>
    document.getElementById("header").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });

  return (
    <Layout title={character.name} subTitle="Skills">
      <div className="page-container">
        <div className="left">
          <Menu character={character} />
        </div>
        <div className="right">
          {expertise.map(x => (
            <div id={x} className="content" key={x}>
              <h1>{x.replace(/^./, str => str.toUpperCase())}</h1>

              {character[x].map(skill => (
                <div key={skill.name} id={skill.name}>
                  <div className="content is-small">
                    <h1> {skill.name}</h1>
                  </div>
                  {skill.type !== "Gathering" && <SkillTable skill={skill} />}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <button id="myBtn" className="toTopBtn" onClick={() => scrollTo()}>
        UP
      </button>
    </Layout>
  );
};

export default CharacterPage;
