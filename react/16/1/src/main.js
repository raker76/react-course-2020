import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import RedBoxGame from "./red_box_game";
import DisplayScore from "./game_score";


const App = () => {
  const [score, setScore] = useState(0);

  return (
    <div>
      <h2>RedBox Game</h2>
      <RedBoxGame setScore={setScore}/>
      <DisplayScore score={score}/>
    </div>
  );
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
