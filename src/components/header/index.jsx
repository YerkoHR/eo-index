import React from "react";
import { Link } from "react-router-dom";

const Header = ({ title, subTitle }) => (
  <section id="header">
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Etrian Odyssey Classes
        </Link>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <Link to="/status-info" className="navbar-item">
            Combat Variables
          </Link>
        </div>
      </div>
    </nav>
    <div className={"hero is-primary " + title}>
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          <h2 className="subtitle">{subTitle}</h2>
        </div>
      </div>
    </div>
  </section>
);
export default Header;
