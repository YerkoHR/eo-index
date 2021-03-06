import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";
import ClassList from "./components/classList";
import Routes from "./routes";

import "./sass/main.scss";
import "bulma/css/bulma.css";

const App = () => {
  return (
    <Layout title="Etrian Odyssey" subTitle="Classes">
      <ClassList />
    </Layout>
  );
};

export default App;

ReactDOM.render(<Routes />, document.getElementById("root"));
