import React from "react";
import "./style.css";

const Header = ({ title, subTitle }) => (
  <section className={"hero is-primary " + title} id="header">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{subTitle}</h2>
      </div>
    </div>
  </section>
);
export default Header;
