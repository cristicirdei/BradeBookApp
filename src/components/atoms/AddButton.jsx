import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddButton = ({ link, page }) => {
  return (
    <>
      <Link to={link}>
        <button className="addButton">
          <FontAwesomeIcon icon="fa-solid fa-square-plus" />
          {page}
        </button>
      </Link>
    </>
  );
};
export default AddButton;
