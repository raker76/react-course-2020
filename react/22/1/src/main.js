import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

function MoveFocus({ data }) {
  const refs = [useRef(), useRef(), useRef(), useRef()];

  function moveFocus(e, index) {
    e.target.innerHTML = e.key;
    refs[index].current.focus();
  }

  useEffect(function(){
    refs[0].current.focus();
  },[]);

  return (
    <>
      <table border="1px">
        <tbody>
          <tr>
            <td>
              <div
                tabIndex={1}
                ref={refs[0]}
                onKeyPress={(e) => moveFocus(e, 1)}
              ></div>
            </td>
            <td>
              <div
                tabIndex={1}
                ref={refs[1]}
                onKeyPress={(e) => moveFocus(e, 2)}
              ></div>
            </td>
            <td>
              <div
                tabIndex={1}
                ref={refs[2]}
                onKeyPress={(e) => moveFocus(e, 3)}
              ></div>
            </td>
            <td>
              <div
                tabIndex={1}
                ref={refs[3]}
                onKeyPress={(e) => moveFocus(e, 0)}
              ></div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

const App = () => {
  return (
    <div>
      <MoveFocus />
    </div>
  );
};

// main.js
const root = document.querySelector("main");
ReactDOM.render(<App />, root);
