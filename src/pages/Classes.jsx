/*
page with all classes 
*/

import React from "react";
import ClassCard from "../components/molecules/ClassCard";
import AddButton from "../components/atoms/AddButton";

const Classes = () => {
  return (
    <div className="page">
      <h1>Classes</h1>
      <p>Here are all classes</p>
      <div className="classes-container">
        <ClassCard
          link={"/view/class"}
          name="Math 7B"
          students={15}
        ></ClassCard>
        <ClassCard
          link={"/view/class"}
          name="English 5A"
          students={17}
        ></ClassCard>
        <AddButton link="/add/classes" page="Add Class"></AddButton>
      </div>
    </div>
  );
};
export default Classes;
