import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CharacterPage from "./pages/characterPage";
import StatusPage from "./pages/StatusPage";
import NotFound from "./pages/NotFound";
import App from "./index";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/status-info" component={StatusPage} />
      <Route path="/:character" component={CharacterPage} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
