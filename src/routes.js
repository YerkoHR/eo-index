import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CharacterPage from "./components/characterPage";
import App from "./index";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/:character" component={CharacterPage} />
    </Switch>
  </Router>
);

export default Routes;
