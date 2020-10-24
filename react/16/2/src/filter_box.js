import React from "react";
import { useState } from "react";

export default function FilterBox(props) {
  const { setFilter } = props;

  return (
    <input type="text" onChange={(e) => setFilter(e.target.value)}></input>
  );
}
