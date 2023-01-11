import React from "react";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../utils/constants";
import useFetch from "react-fetch-hook";

const Teacher = () => {
  let { id } = useParams();

  const { isLoading, data } = useFetch(`${BACKEND_URL}/teachers/${id}`, {
    formatter: (response) => response.json(),
    
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.getItem("token"),
      },
      withCredentials: true,
    
  });

  console.log("student data here ");
  console.log(data);
  let teacher = data;

  return (
    <div className="page">
      <h1>Teacher</h1>
      <div className="class-details" style={{ marginTop: "1rem" }}>
        {isLoading ? (
          "..loading"
        ) : (
          <div className="details-zone">
            <h2>{teacher.name}</h2>
            <p>ID: {teacher.nr}</p>
            <p>Classes: {teacher.classes.map((c) => c + " | ")}</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Teacher;
