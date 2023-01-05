import React from "react";
import { user } from "../../data/userData";
import { Link } from "react-router-dom";

const handleLogOut = () => {
  localStorage.removeItem("token");
  window.location.reload();
};

if (localStorage.getItem("token")) {
  user.auth = true;
}

const Header = () => {
  const adm = user.type === "admin" ? "admin" : "user";
  return (
    <div className={`header ${adm}`}>
      {/*user.auth === true && (
        <div className="navlinks" onClick={() => handleLogOut()}>
          {" "}
          <Link to="/login">Sign Out</Link>
        </div>
      )*/}
    </div>
  );
};
export default Header;
