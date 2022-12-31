/*
a card element to represent a student
*/

import React from "react";
import { Link } from "react-router-dom";
import icon from "../../resources/teacher-user-solid.svg";

const TeacherCard = ({ link, name }) => {
  return (
    <Link to={link} style={{ color: "inherit", textDecoration: "none" }}>
      <div className="student-card">
        <img src={icon} alt="graduate" />
        <h3>{name}</h3>
      </div>
    </Link>
  );
};
export default TeacherCard;
