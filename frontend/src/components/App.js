import React from "react";
import "../style/App.css";
import FrontendStatus from "./FrontendStatus";
import NodeStatus from "./NodeStatus";
import GraphQLStatus from "./GraphQLStatus";
import DatabaseStatus from "./DatabaseStatus";

const App = () => {
  return (
    <div className="Wrapper">
      <header className="App-header">Docker stack test (AWS deployment)</header>
      <div className="section">-Frontend-</div>
      <FrontendStatus />
      <div className="section">-Backend-</div>
      <NodeStatus />
      <GraphQLStatus />
      <div className="section">-Database-</div>
      <DatabaseStatus />
    </div>
  );
};

export default App;
