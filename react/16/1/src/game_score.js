import React from 'react';
import { useState } from 'react';

export default function DisplayScore (props) {
  const {score} = props;
  
  return (
  <p>Score: {score}</p>
  );
};



