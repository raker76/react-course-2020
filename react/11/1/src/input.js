import React from "react";

export default function Input(props) {
  const { inputData, updateInputData } = props;

  function handleInputChange(e) {
    updateInputData(e.target.value);
  }

  return (
    <div>
      <input value={inputData} onChange={handleInputChange} />
    </div>
  );
}
