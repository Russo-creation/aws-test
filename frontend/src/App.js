import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [nodeStatus, setNodeStatus] = useState("fail");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/node_status`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        // Work with JSON data here
        //  setNodeStatus(data.status);
        console.log(data);
      })
      .catch((err) => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>{nodeStatus}</div>
      </header>
    </div>
  );
};

export default App;
