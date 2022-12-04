/*
grades page for a certain class
*/

import React from "react";
import Table from "../components/organisms/GradesTable";

const Grades = () => {
  return (
    <div className="page">
      <h1>Grades</h1>
      <Table></Table>
    </div>
  );
};
export default Grades;
