import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";
import ClassList from "./components/classes/ClassList";
import "bulma/css/bulma.css";

const App = () => {
  return (
    <Layout>
      <ClassList />
    </Layout>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
