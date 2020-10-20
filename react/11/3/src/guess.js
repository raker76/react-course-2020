import React from "react";

export default function Guess(props) {
  const num = Math.floor(Math.random() * 1000);

  console.log(num);

  function checkGuess() {
    const guess = document.querySelector("input");
    const result = document.querySelector("#result");

    if (Number(guess.value) > num) {
      result.innerHTML = getMessage("too big", "too small");
    } else if (Number(guess.value) < num) {
      result.innerHTML = getMessage("too small", "too big");
    } else {
      result.innerHTML = "Boom !!";
    }
  }

  function getMessage(correctMsg, wrongMessage) {
    const cheat = Math.random() > 0.85;
    return cheat ? wrongMessage : correctMsg;
  }

  return (
    <div>
      <input />
      <button onClick={checkGuess}>guess</button>
      <p id="result"></p>
    </div>
  );
}
