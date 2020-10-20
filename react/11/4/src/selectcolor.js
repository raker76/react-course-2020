import React from "react";
import { useState } from "react";

export default function SellectColor(props) {
  const {initColor} = props;
  const [divStyle, setDivStyle] = useState({ background:initColor ,border: "1px solid black" });

  function changeColor(e) {
    const colorValue = e.target[e.target.selectedIndex].value;
    setDivStyle({ background: colorValue });
  }

  const colors = ["yellow","red", "green", "blue", "black"];
  return (
    <>
      <select name="colors" onChange={changeColor}>
        <option>Select color</option>
        {colors.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <div id="colorDiv" style={divStyle}>
        Color div
      </div>
    </>
  );
}
