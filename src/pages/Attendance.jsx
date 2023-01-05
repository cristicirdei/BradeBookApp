/*
attendance page for a certain class
*/

import React, { useState, useEffect } from "react";
import Table from "../components/organisms/AttendanceTable";
import { BACKEND_URL } from "../utils/constants";
import { user } from "../data/userData";

const Attendance = () => {
  const adm = user.type === "admin" ? "admin" : "user";

  const [currentClass, setCurrentClass] = useState("");

  const [currentClassName, setCurrentClassName] = useState("");
  const [classesList, setClassesList] = useState();
  const [att, setAtt] = useState();

  useEffect(() => {
    const fetchClassData = async () => {
      try {
        const response = await fetch(
          `${BACKEND_URL}/classes/teacher/${user.name}`
        );
        const json = await response.json();
        console.log(json);
        setClassesList(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    const fetchAttData = async () => {
      if (currentClass !== "") {
        try {
          const response = await fetch(
            `${BACKEND_URL}/attendance/class/${currentClass}`
          );
          const json = await response.json();
          console.log(json);
          setAtt(json);
        } catch (error) {
          console.log("error", error);
        }
      } else {
        setAtt({ name: "", dates: [], students: [] });
      }
    };
    fetchClassData();
    fetchAttData();
  }, [currentClass]);

  return (
    <div className="page">
      <div className="classes-section">
        {classesList && classesList.payload.length > 0
          ? classesList.payload.map((c, index) => (
              <button
                className={`${adm} class-link`}
                onClick={() => {
                  console.log("you clicked me");
                  setCurrentClass(c.id);
                  setCurrentClassName(c.name);
                }}
              >
                {c.name}
              </button>
            ))
          : "No classes found"}
      </div>
      <h1>Attendance {currentClassName}</h1>
      <br></br>
      <br></br>
      <br></br>
      {currentClass !== "" ? <Table att={att} classId={currentClass}></Table> : ""}
    </div>
  );
};
export default Attendance;
