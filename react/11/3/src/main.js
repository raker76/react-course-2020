import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import Guess from "./guess";

const App = () => {
  const [inputData, setInputData] = useState("");

  return (
    <div>
      <Guess inputData={inputData} updateInputData={setInputData} />
    </div>
  );
};

// main.js
const root = document.querySelector("main");
ReactDOM.render(<App />, root);
