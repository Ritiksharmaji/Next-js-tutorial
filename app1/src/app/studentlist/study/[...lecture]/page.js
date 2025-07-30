'use client';
import React, { use } from 'react';

function Lecture({ params }) {
    console.log("params are:", params);
  const resolvedParams = use(params); // Unwrap the promise

  return (
    <div>
      <h2>Lecture - {resolvedParams.lecture[0]}</h2>
      <h2>Lecture - {resolvedParams.lecture[1]}</h2>
    </div>
  );
}

export default Lecture;
