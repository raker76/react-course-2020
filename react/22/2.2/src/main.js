import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

function UserDetails({ data }) {
  const [pass1, setPass1] = useState();
  const [pass2, setPass2] = useState();
  const [message, setMessage] = useState();

  function register() {
    if (pass1 && pass1 === pass2) {
      setMessage("Successfully registered");
    } else {
      setMessage("Passwords do not match");
    }
  }

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>User name:</td>
            <td>
              <input type="text"></input>
            </td>
          </tr>
          <tr>
            <td>Password:</td>
            <td>
              <input
                type="text"
                value={pass1 || ""}
                onChange={(e) => setPass1(e.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Confirm password:</td>
            <td>
              <input
                type="text"
                value={pass2 || ""}
                onChange={(e) => setPass2(e.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={register}>Register</button>
            </td>
            <td>{message}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

const App = () => {
  return (
    <>
      <UserDetails />
    </>
  );
};

// main.js
const root = document.querySelector("main");
ReactDOM.render(<App />, root);
