import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

import DisplayList from "./display_list";
import FilterBox from "./filter_box";

const text = ["Jerusalem", "Tel Aviv", "Raanana", "Ramat Gan"];

const App = () => {
  const [filter, setFilter] = useState("");

  return (
    <div>
      <FilterBox setFilter={setFilter}/>
      <DisplayList list={text} filter={filter}/>
    </div>
  );
};

// main.js
const root = document.querySelector("main");
ReactDOM.render(<App />, root);
