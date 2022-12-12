/*
attendance page for a certain class
*/

import React from "react";
import Table from "../components/organisms/AttendanceTable";
import ClassLink from "../components/atoms/ClassLink";

const Attendance = () => {
  return (
    <div className="page">
      <div className="classes-section">
        <ClassLink page="Math 7B"></ClassLink>
        <ClassLink page="English 12D"></ClassLink>
      </div>
      <h1>Attendance</h1>
      <Table></Table>
    </div>
  );
};
export default Attendance;
