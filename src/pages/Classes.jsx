/*
page with all classes 
*/

import React from "react";
import ClassCard from "../components/molecules/ClassCard";
import AddButton from "../components/atoms/AddButton";
import { BACKEND_URL } from "../utils/constants";
import { user } from "../data/userData";
import useFetch from "react-fetch-hook";

const Classes = () => {
  const { isLoading, data } = useFetch(
    user.type === "teacher"
      ? `${BACKEND_URL}/classes/teacher/${user.name}`
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

  console.log("classes data here --");
  console.log(data);
  let classesList = data;

  return (
    <div className="page">
      <h1>Classes</h1>
      <p>Here are all classes</p>

      {isLoading ? (
        "..loading"
      ) : (
        <div className="classes-container">
          {classesList.payload && classesList.payload.length > 0
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
