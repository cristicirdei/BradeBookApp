import React from "react";
import MenuButton from "../atoms/MenuButton";

const Menu = () => {
  return (
    <div className="col-2 menu">
      <MenuButton link="/classes" page="Classes"></MenuButton>
      <MenuButton link="/students" page="Students"></MenuButton>
      <MenuButton link="/add/grades" page="Grades"></MenuButton>
      <MenuButton link="/add/attendance" page="Attendance"></MenuButton>
      <MenuButton link="/reports" page="Reports"></MenuButton>
    </div>
  );
};
export default Menu;
