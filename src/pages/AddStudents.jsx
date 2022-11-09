import React from "react";
import AddStudentsForm from "../components/organisms/AddStudentsForm";

const AddStudents = () => {
  return (
    <div className="page">
      <h1>Add a Student</h1>
      <p>Enter student details.</p>
      <AddStudentsForm></AddStudentsForm>
    </div>
  );
};
export default AddStudents;
