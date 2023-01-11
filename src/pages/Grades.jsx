/*
grades page for a certain class
*/

import React, { useState, useEffect } from "react";
import Table from "../components/organisms/GradesTable";
import { BACKEND_URL } from "../utils/constants";
import check from "../resources/check-solid.svg";

const user = JSON.parse(localStorage.getItem("user"));

const Grades = () => {
  const adm = user.type === "admin" ? "admin" : "user";

  const [currentClass, setCurrentClass] = useState("");
  const [currentClassName, setCurrentClassName] = useState("");
  const [classesList, setClassesList] = useState();
  const [grades, setGrades] = useState();

  useEffect(() => {
    const fetchClassData = async () => {
      try {
        const response = await fetch(
          `${BACKEND_URL}/classes/teacher/${user.id}`,
          {
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

    const fetchGradesData = async () => {
      if (currentClass !== "") {
        try {
          const response = await fetch(
            `${BACKEND_URL}/grades/class/${currentClass}`,
            {
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
      <h1>Grades {currentClassName}</h1>

      {currentClass !== "" ? (
        <>
          <br></br>
          <br></br>
          <br></br>
          <Table grades={grades} classId={currentClass}></Table>
        </>
      ) : (
        <div className="manage-container">
          <div className="manage-small">
            <h2>
              <span>
                <img src={check} alt="check" />
              </span>
              Create New Grade
            </h2>
          </div>
          <div className="manage-small">
            <h2>
              <span>
                <img src={check} alt="check" />
              </span>
              Mark Grades
            </h2>
          </div>
          <div className="manage-small">
            <h2>
              <span>
                <img src={check} alt="check" />
              </span>
              Edit Grades
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};
export default Grades;
