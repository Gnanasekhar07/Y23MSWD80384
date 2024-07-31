import React from 'react';

function Course({ name, code, credits }) {
  return (
    <div className="course">
      <h3>{name}</h3>
      <p>Code: {code}</p>
      <p>Credits: {credits}</p>
    </div>
  );
}

export default Course;
