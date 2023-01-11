import React from "react";
import student from "../resources/user-graduate-solid.svg";
import teacher from "../resources/teacher-user-solid.svg";
import classIcon from "../resources/chalkboard-solid.svg";
import report from "../resources/address-book-solid.svg";
import att from "../resources/list-check-solid.svg";
import grade from "../resources/arrow-up-9-1-solid.svg";

const user = JSON.parse(localStorage.getItem("user"));

const LandingPage = () => {
  return (
    <div className="page">
      <br></br>
      <h1>Welcome back!</h1>
      {user.type === "admin" ? (
        <div className="manage-container">
          <div className="manage">
            <h2>Manage Classes</h2>
            <img src={classIcon} alt="class" />
          </div>
          <div className="manage">
            <h2>Manage Teachers</h2>
            <img src={teacher} alt="teacher" />
          </div>
          <div className="manage">
            <h2>Manage Students</h2>
            <img src={student} alt="graduate" />
          </div>
          <div className="manage">
            <h2>Share Reports</h2>
            <img src={report} alt="report" />
          </div>
        </div>
      ) : (
        <div className="manage-container">
          <div className="manage">
            <h2>Manage Classes</h2>
            <img src={classIcon} alt="class" />
          </div>
          <div className="manage">
            <h2>Mark Grades</h2>
            <img src={grade} alt="grade" />
          </div>
          <div className="manage">
            <h2>Mark Attendance</h2>
            <img src={att} alt="attendance" />
          </div>
        </div>
      )}
    </div>
  );
};
export default LandingPage;
