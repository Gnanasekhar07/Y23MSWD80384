import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Import required components

function Faculty({ name, id, department }) {
  return (
    <div className="faculty">
      <h3>{name}</h3>
      <p>ID: {id}</p>
      <p>Department: {department}</p>
    </div>
  );
}


export default Faculty;
