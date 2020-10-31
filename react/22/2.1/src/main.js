import React from "react";
import ReactDOM from "react-dom";
import { useState,useRef } from "react";

function UserDetails({ data }) {
  const pass1 = useRef();
  const pass2 = useRef();
  const [message,setMessage] = useState();

  function register() {
    if (pass1.current.value && pass1.current.value === pass2.current.value) {
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
              <input type="text" ref={pass1}></input>
            </td>
          </tr>
          <tr>
            <td>Confirm password:</td>
            <td>
              <input type="text" ref={pass2}></input>
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
