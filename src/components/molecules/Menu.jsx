import React from "react";
import MenuButton from "../atoms/MenuButton";

const user = JSON.parse(localStorage.getItem("user")) || { type: "user" };

const Menu = () => {
  //window.location.reload(false);

  return (
    <div className="col-2 menu">
      <h1 className="dash-title">
        {user.type === "admin" ? "Admin" : "Teacher"} Dashboard
      </h1>
      {user.type === "admin" && (
        <>
          <MenuButton link="/classes" page="Classes"></MenuButton>
          <MenuButton link="/students" page="Students"></MenuButton>
          <MenuButton link="/teachers" page="Teachers"></MenuButton>
          <MenuButton link="/reports" page="Reports"></MenuButton>
        </>
      )}
      {user.type === "teacher" && (
        <>
          <MenuButton link="/classes" page="Classes"></MenuButton>
          <MenuButton link="/add/grades" page="Grades"></MenuButton>
          <MenuButton link="/add/attendance" page="Attendance"></MenuButton>
        </>
      )}
    </div>
  );
};
export default Menu;
