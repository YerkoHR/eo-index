import React from "react";
import reducer from "./reducer";

// create a layout for characters since the only thing that changes is the data.

const CharacterPage = ({ match }) => {
  const pathName = match.params.character;

  return <div> {reducer(pathName).novice[0].name}</div>;
};

export default CharacterPage;
