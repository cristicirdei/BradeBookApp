/*
a card element representing a class 
*/

import React from "react";
import { Link } from "react-router-dom";
import eye from "../../resources/eye-regular.svg";

const ClassCard = ({ link, name, students }) => {
  return (
    <Link
      to={link}
      className="class-card"
      style={{ color: "inherit", textDecoration: "none" }}
    >
      <div>
        <h2>{name}</h2>
        <h4>{students} Students</h4>
        <img className="eye" src={eye} alt="View" />
      </div>
    </Link>
  );
};
export default ClassCard;
