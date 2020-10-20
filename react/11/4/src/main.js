import React from "react";
import ReactDOM from "react-dom";
import SellectColor from "./selectcolor.js";

const App = () => {
  
  return (
    <div>
      <SellectColor initColor="cyan"/>
    </div>
  );
};

// main.js
const root = document.querySelector("main");
ReactDOM.render(<App />, root);
