import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import Time from "./time";

const Times = () => {
  const [input, setInput] = useState(0);

  return (
    <div>
      <Time symbol="S" unit={1} input={input} updateInput={setInput} />
      <Time symbol="M" unit={60} input={input} updateInput={setInput} />
      <Time symbol="H" unit={3600} input={input} updateInput={setInput} />
    </div>
  );
};

// main.js
const root = document.querySelector("main");
ReactDOM.render(<Times />, root);
