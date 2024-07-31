import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Student from './components/Student';
import Faculty from './components/Faculty';
import courses from './components/Courses';
import Timetable from './components/Timetable';

function App() {
  const studentData = {
    name: 'John Doe',
    id: '12345',
    branch: 'Computer Science',
  };

  const courseData = [
    { name: 'Math', code: 'MATH101', credits: 3 },
    { name: 'Physics', code: 'PHYS101', credits: 4 },
  ];

  const facultyData = {
    name: 'Prof. Smith',
    id: 'F001',
    department: 'Computer Science',
  };

  const timetableData = {
    Monday: {
      1: 'Math',
      2: 'Physics',
    },
    // ... other days
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Student {...studentData} />
        <Faculty {...facultyData} />
        <div className="courses">
          <h2>Courses</h2>
          {courseData.map((course) => (
            <Course key={course.code} {...courses} />
          ))}
        </div>
        <Timetable timetableData={timetableData} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
