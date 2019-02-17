import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";
import ClassList from "./components/classList";
import Routes from "./routes";

import "bulma/css/bulma.css";

const App = () => {
  return (
    <Layout>
      <ClassList />
    </Layout>
  );
};

export default App;

ReactDOM.render(<Routes />, document.getElementById("root"));
