import React from "react";
import { useState } from "react";

export default function RedBoxGame(props) {
  const { setScore } = props;
  const [redboxIndex, setRedboxIndex] = useState(3);
  const indexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function handleClick(i) {
    if (i === redboxIndex) {
      setScore((s) => s + 10);
      setRedboxIndex(getRandomNumber());
    } else {
      setScore((s) => s - 5);
    }
  }
  function getRandomNumber() {
    const newIndex = Math.floor(Math.random() * 10 + 1);
    console.log(newIndex);
    return newIndex;
  }

  function newGame() {
    setScore(0);
    setRedboxIndex(getRandomNumber());
  }

  return (
    <>
      <p>Catch the red box</p>
      {indexes.map((i) => (
        <div
          key={i}
          id={i}
          className={i === redboxIndex ? "redbox" : "box"}
          onClick={() => handleClick(i)}
        ></div>
      ))}
      <br/>
      <button onClick={newGame}>New game</button>
    </>
  );
}
