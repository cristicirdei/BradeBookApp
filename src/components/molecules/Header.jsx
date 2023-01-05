import React from "react";
import { user } from "../../data/userData";

const Header = () => {
  const adm = user.type === "admin" ? "admin" : "user";
  return <div className={`header ${adm}`}></div>;
};
export default Header;
