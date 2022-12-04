/*
attendance page for a certain class
*/

import React from "react";
import Table from "../components/organisms/AttendanceTable";

const Attendance = () => {
  return (
    <div className="page">
      <h1>Attendance</h1>
      <Table></Table>
    </div>
  );
};
export default Attendance;
