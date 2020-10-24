import React from "react";
import { useState } from "react";

export default function AddressPage(props) {
  const { address, setAddress } = props;

  function updateCountry(e) {
    const value = e.target.value;
    setAddress((u) => Object.assign(u, { country: value }));
  }

  function updateCity(e) {
    const value = e.target.value;
    setAddress((u) => Object.assign(u, { city: value }));
  }

  return (
    <div>
      <p>Country:</p>
      <input type="text" value={address.country} onChange={updateCountry}></input>
      <p>City:</p>
      <input type="text" value={address.city} onChange={updateCity}></input>
    </div>
  );
}
