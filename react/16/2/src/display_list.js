import React from "react";
import { useState } from "react";

export default function DisplayList(props) {
  const { list, filter } = props;

  return (
    <div>
      {list.filter(text => text.toLowerCase().indexOf(filter) != -1).map((text) => (
        <div key={text}>
          {text}
        </div>
      ))}
      <br />
    </div>
  );
}
