/*
page with all students
*/

import React from "react";
import StudentCard from "../components/molecules/StudentCard";
import AddButton from "../components/atoms/AddButton";
import { BACKEND_URL } from "../utils/constants";
import { user } from "../data/userData";
import useFetch from "react-fetch-hook";

const Students = () => {
  const { isLoading, data } = useFetch(
    `${BACKEND_URL}/students/all/${user.institution}`,
    {
      formatter: (response) => response.json(),

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.getItem("token"),
      },
      withCredentials: true,
    }
  );

  console.log("data here ");
  console.log(data);
  let studentsList = data;

  return (
    <div className="page">
      <h1>Students</h1>
      <p>Here are all the kids</p>

      {isLoading ? (
        "..loading"
      ) : (
        <div className="classes-container">
          {studentsList.payload && studentsList.payload.length > 0
            ? studentsList.payload.map((student, index) => (
                <StudentCard
                  key={index}
                  link={`/view/student/${student.id}`}
                  name={student.name}
                ></StudentCard>
              ))
            : "no students found"}
          {user.type === "admin" && (
            <AddButton link="/add/students" page="Add Student"></AddButton>
          )}
        </div>
      )}
    </div>
  );
};
export default Students;
