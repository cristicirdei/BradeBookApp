/*
page detailing a class
*/

import React from "react";
import { fakeStudentsList } from "../fakeData";
import Table from "../components/organisms/GradesTable";

const Class = () => {
  const checkedStudentsList = fakeStudentsList;

  return (
    <div className="class-details">
      <div className="container">
        <div className="details-zone">
          <h2>Class Details</h2>
          <p>details</p>
        </div>

        <div className="tables-zone">
          <p>smth</p>
        </div>

        <Table className="table-det"></Table>
      </div>

      <div className="students-zone">
        <h2>Students</h2>

        <div className="list">
          {checkedStudentsList.length
            ? checkedStudentsList.map((name, index) => (
                <div className="input-group-student" key={index}>
                  <label htmlFor={name} className="main">
                    {name}
                    <input
                      type="checkbox"
                      id={name}
                      value={name}
                      checked
                    ></input>
                    <span className="geek-mark-check"></span>
                  </label>
                </div>
              ))
            : "No students enrolled"}
        </div>
      </div>
    </div>
  );
};
export default Class;
