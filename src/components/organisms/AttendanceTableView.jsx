import React from "react";
import { classAttendance } from "../../fakeData";

const AttendanceTableView = () => {
  return (
    <table className="view-table">
      <thead>
        <tr>
          <th colSpan={3} className="table-title">
            Attendance
          </th>
        </tr>
        <tr>
          <th>Student</th>
          {classAttendance.dates.map((date, index) => (
            <th key={index}>{date}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {classAttendance.students.map((student, index) => (
          <tr key={index}>
            <td>{student.name}</td>
            {student.att.map((date, index) => (
              <td key={index}>
                <p className="centered">{date.value}</p>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AttendanceTableView;
