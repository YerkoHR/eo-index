import React, { useEffect } from "react";
import "./styles.css";

const toTopBtn = ({ characterName }) => {
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
    <>
      <button
        id="myBtn"
        className={"toTopBtn " + characterName}
        onClick={() => scrollTo()}
      >
        UP
      </button>
    </>
  );
};

export default toTopBtn;
