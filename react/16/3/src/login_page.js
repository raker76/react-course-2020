import React from "react";
import { useState } from "react";

export default function LoginPage(props) {
  const { user, setUser } = props;

  function updateUserName(e) {
    const value = e.target.value;
    setUser(u => Object.assign(u,{ name: value }));
  }

  function updatePassword(e) {
    const value = e.target.value;
    setUser((u) => Object.assign(u, { password: value }));
  }

  return (
    <div>
      <p>User name:</p>
      <input type="text" value={user.name} onChange={updateUserName}></input>
      <p>Password:</p>
      <input type="text" value={user.password} onChange={updatePassword}></input>
    </div>
  );
}
