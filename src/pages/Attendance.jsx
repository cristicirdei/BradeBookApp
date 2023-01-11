/*
attendance page for a certain class
*/

import React, { useState, useEffect } from "react";
import Table from "../components/organisms/AttendanceTable";
import { BACKEND_URL } from "../utils/constants";
import check from "../resources/check-solid.svg";

const user = JSON.parse(localStorage.getItem("user"));

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
        setClassesList(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    const fetchAttData = async () => {
      if (currentClass !== "") {
        try {
          const response = await fetch(
            `${BACKEND_URL}/attendance/class/${currentClass}`,
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

      {currentClass !== "" ? (
        <>
          <br></br>
          <br></br>
          <br></br>
          <Table att={att} classId={currentClass}></Table>
        </>
      ) : (
        <div className="manage-container">
          <div className="manage-small">
            <h2>
              <span>
                <img src={check} alt="check" />
              </span>
              Create New Date
            </h2>
          </div>
          <div className="manage-small">
            <h2>
              <span>
                <img src={check} alt="check" />
              </span>
              Mark Attendance
            </h2>
          </div>
          <div className="manage-small">
            <h2>
              <span>
                <img src={check} alt="check" />
              </span>
              Edit Attendance
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};
export default Attendance;
