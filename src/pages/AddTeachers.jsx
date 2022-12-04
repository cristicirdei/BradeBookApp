import React from "react";
import AddTeachersForm from "../components/organisms/AddTeachersForm";

const AddTeachers = () => {
  return (
    <div className="page">
      <h1>Add a Teacher</h1>
      <p>Enter teacher details.</p>
      <AddTeachersForm></AddTeachersForm>
    </div>
  );
};
export default AddTeachers;
