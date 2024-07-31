import React from 'react';

function Student({ name, id, branch }) {
  return (
    <div className="student">
      <h2>Student</h2>
      <p>Name: {name}</p>
      <p>ID: {id}</p>
      <p>Branch: {branch}</p>
    </div>
  );
}

export default Student;
