/*
page with all classes 
*/

import React from "react";
import ClassCard from "../components/molecules/ClassCard";
import AddButton from "../components/atoms/AddButton";
import { BACKEND_URL } from "../utils/constants";
import useFetch from "react-fetch-hook";

const user = JSON.parse(localStorage.getItem("user"));
console.log("from classes ", user);

console.log(localStorage.getItem("token"));

const Classes = () => {
  const { isLoading, data } = useFetch(
    user.type === "teacher"
      ? `${BACKEND_URL}/classes/teacher/${user.id}`
      : `${BACKEND_URL}/classes/all/${user.institution}`,
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

  let classesList = data;

  return (
    <div className="page">
      <h1>Classes</h1>
      <p>Here are all classes</p>

      {isLoading ? (
        "..loading"
      ) : (
        <div className="classes-container">
          {classesList && classesList.payload && classesList.payload.length > 0
            ? classesList.payload.map((c, index) => (
                <ClassCard
                  link={`/view/class/${c.id}`}
                  name={c.name}
                  students={c.students}
                ></ClassCard>
              ))
            : "No classes found"}
          {user.type === "admin" && (
            <AddButton link="/add/classes" page="Add Class"></AddButton>
          )}
        </div>
      )}
    </div>
  );
};
export default Classes;
