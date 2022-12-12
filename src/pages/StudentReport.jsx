/*
page for a student report
*/

import React from "react";
import IndividualGradesTableView from "../components/organisms/IndividualGradesTableView";
import IndividualAttendanceTableView from "../components/organisms/IndividualAttendanceTableView";
import { student } from "../fakeData";

const StudentReport = () => {
  return (
    <div className="page">
      <h1>StudentReport</h1>
      <div className="class-details">
        <div className="container">
          <div className="details-zone">
            <h2>{student.name}</h2>
            <p>ID: 1204</p>
            <p>Age: {student.age}</p>
            <p>Classes: {student.classes.map((c) => c + " | ")}</p>
          </div>
          <h2>Grades</h2>
          {student.grades.map((g) => (
            <IndividualGradesTableView
              name={g.name}
              values={g.values}
            ></IndividualGradesTableView>
          ))}
          <h2>Attendance</h2>
          {student.attendance.map((a) => (
            <IndividualAttendanceTableView
              name={a.name}
              values={a.values}
            ></IndividualAttendanceTableView>
          ))}
        </div>
      </div>
    </div>
  );
};
export default StudentReport;
