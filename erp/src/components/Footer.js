import React, { useState, useEffect } from 'react';

function Footer() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer>
      <p>&copy; Copyright 2023 - {currentDate.toLocaleDateString()}</p>
    </footer>
  );
}

export default Footer;
