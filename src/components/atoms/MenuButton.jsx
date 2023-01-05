import React from "react";
import { Link } from "react-router-dom";
import { user } from "../../data/userData";

const MenuButton = ({ link, page }) => {
  const adm = user.type === "admin" ? "admin" : "user";
  return (
    <Link to={link} className="menuButtonContainer">
      <button className={`${adm} menuButton`}>{page}</button>
    </Link>
  );
};
export default MenuButton;
