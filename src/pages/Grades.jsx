/*
grades page for a certain class
*/

import React from "react";
import Table from "../components/organisms/GradesTable";
import ClassLink from "../components/atoms/ClassLink";

const Grades = () => {
  return (
    <div className="page">
      <div className="classes-section">
        <ClassLink page="Math 7B"></ClassLink>
        <ClassLink page="English 12D"></ClassLink>
      </div>
      <h1>Grades</h1>
      <Table></Table>
    </div>
  );
};
export default Grades;
