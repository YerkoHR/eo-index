import React from "react";
//import data from "../../data/hero";

// create a layout for characters since the only thing that changes is the data.

const Hero = ({ match }) => <div>{match.params.character}</div>;

export default Hero;
