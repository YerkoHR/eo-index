import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CharacterPage from "./components/characterPage";
import StatusPage from "./components/StatusPage";
import NotFound from "./pages/NotFound";
import App from "./index";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/status-info" component={StatusPage} />
      <Route path="/class/:character" component={CharacterPage} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
