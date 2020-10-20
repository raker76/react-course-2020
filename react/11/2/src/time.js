import React from "react";

export default function Time(props) {
  const { symbol, unit, input, updateInput } = props;

  function handleInputChange(e) {
    updateInput(Number(e.target.value) * unit);
  }

  return (
    <div>
      {symbol}: <input value={input / unit} onChange={handleInputChange} />
    </div>
  );
}
