import React from "react";
import { fakeStudentsList } from "../fakeData";

const Reports = () => {
  const classes = ["Math 7B", "English 7B", "Geometry 12C"];

  return (
    <div className="page">
      <h1>Reports</h1>
      <div className="reports">
        <h3>Class Report</h3>
        <div className="input-group">
          <select id="class">
            {classes.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button className="menuButton">Generate Class Report</button>
        </div>
      </div>
      <div className="reports">
        <h3>Student Report</h3>
        <div className="input-group">
          <select id="class">
            {fakeStudentsList.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button className="menuButton">Generate Student Report</button>
        </div>
      </div>
    </div>
  );
};
export default Reports;
