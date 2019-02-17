import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hero from "./components/characters/Hero";
import App from "./index";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/:character" component={Hero} />
    </Switch>
  </Router>
);

export default Routes;
