import React from "react";
import { Link } from "react-router-dom";

const MenuButton = ({ link, page }) => {
  return (
    <Link to={link} className="menuButtonContainer">
      <button className="menuButton">{page}</button>
    </Link>
  );
};
export default MenuButton;
