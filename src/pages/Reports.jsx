import React, { useState, useEffect } from "react";
import { BACKEND_URL } from "../utils/constants";
import { user } from "../data/userData";

const Reports = () => {
  const [classesList, setClassesList] = useState();
  const [studentsList, setStudentsList] = useState();

  useEffect(() => {
    const fetchClassData = async () => {
      try {
        const response = await fetch(
          `${BACKEND_URL}/classes/all/${user.institution}`, {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: localStorage.getItem("token"),
            },
            withCredentials: true,
          }
        );
        const json = await response.json();
        console.log(json);
        setClassesList(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    const fetchStudentData = async () => {
      try {
        const response = await fetch(
          `${BACKEND_URL}/students/all/${user.institution}`, {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: localStorage.getItem("token"),
            },
            withCredentials: true,
          }
        );
        const json = await response.json();
        console.log(json);
        setStudentsList(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchClassData();
    fetchStudentData();
  }, []);

  return (
    <div className="page">
      <h1>Reports</h1>
      <div className="reports">
        <h3>Class Report</h3>
        <div className="input-group">
          <select id="class">
            {classesList && classesList.payload.length > 0
              ? classesList.payload.map((option, index) => (
                  <option key={index} value={option.name}>
                    {option.name}
                  </option>
                ))
              : ""}
          </select>
          <button className="menuButton">Generate Class Report</button>
        </div>
      </div>
      <div className="reports">
        <h3>Student Report</h3>
        <div className="input-group">
          <select id="class">
            {studentsList && studentsList.payload.length > 0
              ? studentsList.payload.map((option, index) => (
                  <option key={index} value={option.name}>
                    {option.name}
                  </option>
                ))
              : ""}
          </select>
          <button className="menuButton">Generate Student Report</button>
        </div>
      </div>
    </div>
  );
};
export default Reports;
