/*
page detailing a class
*/

import React, { useEffect, useState } from "react";
import GradesTableView from "../components/organisms/GradesTableView";
import AttendanceTableView from "../components/organisms/AttendanceTableView";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../utils/constants";
import { user } from "../data/userData";

const Class = () => {
  let { id } = useParams();

  const [class1, setClass1] = useState("");
  const [att, setAtt] = useState();
  const [grades, setGrades] = useState();

  useEffect(() => {
    const fetchClassData = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/classes/${id}`);
        const json = await response.json();
        console.log(json);
        setClass1(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    const fetchGradesData = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/grades/class/${id}`);
        const json = await response.json();
        console.log(json);
        setGrades(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    const fetchAttData = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/attendance/class/${id}`);
        const json = await response.json();
        console.log(json);
        setAtt(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchClassData();
    fetchGradesData();
    fetchAttData();
  }, [id]);

  const adm = user.type === "admin" ? "admin" : "user";

  return (
    <div className="page">
      <div className="class-details">
        <div className="container">
          <div className="details-zone">
            <h2 className={`${adm}-color`}>{class1.name}</h2>
            <p>Subject: {class1.subject}</p>
            <p>Teacher: {class1.teacher}</p>
            <p>About: {class1.description}</p>
          </div>
          {grades ? <GradesTableView grades={grades}></GradesTableView> : ""}
          {att ? <AttendanceTableView att={att}></AttendanceTableView> : ""}
        </div>

        <div className="students-zone">
          <h2 className={`${adm}-color`}>Students</h2>

          <div className="list">
            {class1.students && class1.students.length > 0
              ? class1.students.map((name, index) => (
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
