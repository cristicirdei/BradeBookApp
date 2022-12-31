import React from "react";
import { Link } from "react-router-dom";

const ClassLink = ({ page, link }) => {
  return (
    <Link to={link}>
      <button className="class-link">{page}</button>
    </Link>
  );
};
export default ClassLink;
