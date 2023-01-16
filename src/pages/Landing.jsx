import React from "react";
import student from "../resources/user-graduate-solid.svg";
import teacher from "../resources/teacher-user-solid.svg";
import classIcon from "../resources/chalkboard-solid.svg";
import report from "../resources/address-book-solid.svg";
import att from "../resources/list-check-solid.svg";
import grade from "../resources/arrow-up-9-1-solid.svg";

import grades from "../resources/grades.png";
import reports from "../resources/report.png";
import classes from "../resources/classes.png";

const Landing = () => {
  return (
    <div className="page-over beige">
      <div className="container-land beige">
        <div className="container">
          <div className="blob-c">
            <div className="shape-blob"></div>
            <div className="shape-blob one"></div>
            <div className="shape-blob two"></div>
            <div className="shape-blob three"></div>
            <div className="shape-blob four"></div>
            <div className="shape-blob five"></div>
            <div className="shape-blob six"></div>
          </div>
          <h1>
            Alpha<br></br> GradeBook
          </h1>
          <h2>Online Grading Solution </h2>
        </div>
        <div className="one-1">
          <h2>
            Alpha GradeBook offers a intuitive ad easy-to-use interface, to
            facilitate class management, allowing teachers to mark grades and
            attendance.
          </h2>
        </div>
        <div className="white">
          <div className="zero">
            <div className="three">
              <img src={classIcon} alt="class" /> Manage Classes
            </div>
            <div className="three">
              <img src={teacher} alt="teacher" />
              Manage Teachers
            </div>
            <div className="three">
              <img src={student} alt="graduate" />
              Manage Students
            </div>
            <div className="three">
              {" "}
              <img src={report} alt="report" />
              Generate Reports
            </div>
            <div className="three">
              <img src={grade} alt="grade" />
              Mark Grades
            </div>
            <div className="three">
              <img src={att} alt="attendance" />
              Mark Attendance
            </div>
          </div>

          <div className="half">
            <div className="section">
              <h2>
                Mark grades and attendance for each class and student. Create &
                edit grades for tests, homeworks and dates for your class
                attendance.
              </h2>
            </div>
            <div className="section">
              <img src={grades} alt="grades table" />
            </div>
            <div className="section">
              <img src={reports} alt="class report" />
            </div>
            <div className="section">
              <h2>
                Get reports for individual classes or students and share them
                with staff or parents.
              </h2>
            </div>
            <div className="section">
              <h2>
                High level management for all classes and people in the
                institution. One account to rule them all.
              </h2>
            </div>
            <div className="section">
              <img className="img2" src={classes} alt="classes" />
            </div>
          </div>

          <h2 className="section-title">
            Manage an entire institution, with different accounts for different
            interests
          </h2>
          <div className="one">
            <div className="two">
              <h2>Admin Account</h2>
              <p>One main account for institution management</p>
              <ul>
                <li>Manage Classes</li>
                <li>Manage Teachers</li>
                <li>Manage Students</li>
                <li>Generate Reports</li>
              </ul>
            </div>
            <div className="two">
              <h2>Teacher Account</h2>
              <p>Multiple accounts for individual class management</p>
              <ul>
                <li>Manage Individual Classes</li>
                <li>Mark Grades</li>
                <li>Mark Attendance</li>
              </ul>
            </div>
          </div>
          <div className="sub"></div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
