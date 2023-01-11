import React from "react";
import { Link } from "react-router-dom";

const user = JSON.parse(localStorage.getItem("user"));

const ClassLink = ({ page, link }) => {
  const adm = user.type === "admin" ? "admin" : "user";
  return (
    <Link to={link}>
      <button className={`${adm} class-link`}>{page}</button>
    </Link>
  );
};
export default ClassLink;
