import React from "react";
import { Link } from "react-router-dom";
import { user } from "../../data/userData";

const ClassLink = ({ page, link }) => {
  const adm = user.type === "admin" ? "admin" : "user";
  return (
    <Link to={link}>
      <button className={`${adm} class-link`}>{page}</button>
    </Link>
  );
};
export default ClassLink;
