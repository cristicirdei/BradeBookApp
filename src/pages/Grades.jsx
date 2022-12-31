/*
grades page for a certain class
*/

import React, { useState, useEffect } from "react";
import Table from "../components/organisms/GradesTable";
import { BACKEND_URL } from "../utils/constants";
import { user } from "../data/userData";

const Grades = () => {
  const [currentClass, setCurrentClass] = useState("");
  const [currentClassName, setCurrentClassName] = useState("");
  const [classesList, setClassesList] = useState();
  const [grades, setGrades] = useState();

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

    const fetchGradesData = async () => {
      if (currentClass !== "") {
        try {
          const response = await fetch(
            `${BACKEND_URL}/grades/class/${currentClass}`
          );
          const json = await response.json();
          console.log(json);
          setGrades(json);
        } catch (error) {
          console.log("error", error);
        }
      } else {
        setGrades({ name: "", grades: [], students: [] });
      }
    };
    fetchClassData();
    fetchGradesData();
  }, [currentClass]);

  return (
    <div className="page">
      <div className="classes-section">
        {classesList && classesList.payload.length > 0
          ? classesList.payload.map((c, index) => (
              <button
                className="class-link"
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
      <h1>Grades {currentClassName}</h1>
      <br></br>
      <br></br>
      <br></br>
      {currentClass !== "" ? <Table grades={grades}></Table> : ""}
    </div>
  );
};
export default Grades;
