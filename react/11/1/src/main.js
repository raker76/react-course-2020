import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import Input from "./input";

const MultiInput = () => {
  const [inputData, setInputData] = useState("");

  return (
    <div>
      <Input inputData={inputData} updateInputData={setInputData} />
      <Input inputData={inputData} updateInputData={setInputData} />
      <Input inputData={inputData} updateInputData={setInputData} />
      <Input inputData={inputData} updateInputData={setInputData} />
      <Input inputData={inputData} updateInputData={setInputData} />
    </div>
  );
};

// main.js
const root = document.querySelector("main");
ReactDOM.render(<MultiInput />, root);
