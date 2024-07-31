import React from 'react';

function Timetable({ timetableData }) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const hours = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <div className="timetable">
      <table>
        <thead>
          <tr>
            <th></th>
            {days.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour) => (
            <tr key={hour}>
              <th>{hour}:00 - {hour + 1}:00</th>
              {days.map((day) => (
                <td key={`${day}-${hour}`}>
                  {/* Replace with actual course or empty cell */}
                  {/* Example: timetableData[day][hour] */}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Timetable;
