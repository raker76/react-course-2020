import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

import LoginPage from "./login_page";
import AddressPage from "./address_page";
import SummaryPage from "./summary_page";

const App = () => {
  const [page, setPage] = useState("login");
  const [user, setUser] = useState({});
  const [address, setAddress] = useState({});
  

  function next() {
    if (page === "login") {
      setPage("address");
    } else if (page === "address") {
      setPage("summary");
    }
  }

  function prev() {
    if (page === "summary") {
      setPage("address");
    } else if (page === "address") {
      setPage("login");
    }
  }

  return (
    <div>
      {page === "login" && <LoginPage user={user} setUser={setUser}/>}
      {page === "address" && <AddressPage address={address} setAddress={setAddress} />}
      {page === "summary" && <SummaryPage user={user} address={address}/>}

      <br />
      <div>
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

// main.js
const root = document.querySelector("main");
ReactDOM.render(<App />, root);
