import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Something from "./Something";
import { Button } from "@material-ui/core";

function App() {
  const onClick = () => {
    console.log("button clicked!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello World!</p>
        <Something />
        <Button color="primary" variant="contained" onClick={onClick}>
          Hello Button
        </Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
