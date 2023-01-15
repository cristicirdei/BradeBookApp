import React from "react";
import { Link } from "react-router-dom";

const user = JSON.parse(localStorage.getItem("user")) || {
  type: "user",
  auth: false,
};

const handleLogOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.reload();
};

/*if (localStorage.getItem("token")) {
  user.auth = true;
}*/
/*
localStorage.removeItem("token");
localStorage.removeItem("user");
*/

const items = { ...localStorage };
console.log("storage ", items);

const Header = () => {
  const adm =
    user.type === "admin"
      ? "admin"
      : user.type === "teacher"
      ? "user"
      : "admin";
  return (
    <div className={`header ${adm}`}>
      {user.auth === true ? (
        <div className="navlinks" onClick={() => handleLogOut()}>
          {" "}
          <Link to="/auth">Sign Out</Link>
        </div>
      ) : (
        <>
          <div className="navlinks" onClick={() => window.location.reload()}>
            <Link to="/auth">Log In</Link>
          </div>
          <div className="navlinks" onClick={() => window.location.reload()}>
            <Link to="/auth/join">Sign Up</Link>
          </div>
        </>
      )}
    </div>
  );
};
export default Header;
