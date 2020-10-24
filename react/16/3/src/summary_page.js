import React from "react";
import { useState } from "react";

export default function SummaryPage(props) {
  const { user,address } = props;

  return (
    <div>
      <p>
        User: {user.name}/{user.password}
      </p>
      <p>
        Address: {address.country}/{address.city}
      </p>
    </div>
  );
}
