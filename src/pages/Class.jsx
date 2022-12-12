/*
page detailing a class
*/

import React from "react";
import { fakeStudentsList } from "../fakeData";
import GradesTableView from "../components/organisms/GradesTableView";
import AttendanceTableView from "../components/organisms/AttendanceTableView";

const Class = () => {
  const checkedStudentsList = fakeStudentsList;

  return (
    <div className="page">
      <div className="class-details">
        <div className="container">
          <div className="details-zone">
            <h2>Math 7B</h2>
            <p>Subject: Math</p>
            <p>Teacher: Mr. Something</p>
            <p>About: 7th grade algebra</p>
          </div>
          <GradesTableView></GradesTableView>
          <AttendanceTableView></AttendanceTableView>
        </div>

        <div className="students-zone">
          <h2>Students</h2>

          <div className="list">
            {checkedStudentsList.length
              ? checkedStudentsList.map((name, index) => (
                  <div className="input-group-student" key={index}>
                    <label htmlFor={name} className="main">
                      {name}
                    </label>
                  </div>
                ))
              : "No students enrolled"}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Class;
