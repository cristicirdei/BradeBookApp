/*
a card element to represent a student
*/

import React from "react";
import { Link } from "react-router-dom";
import eye from "../../resources/eye-regular.svg";

const StudentCard = ({ link, name }) => {
  return (
    <Link
      to={link}
      className="student-card"
      style={{ color: "inherit", textDecoration: "none" }}
    >
      <div>
        <h3>{name}</h3>
      </div>
    </Link>
  );
};
export default StudentCard;
