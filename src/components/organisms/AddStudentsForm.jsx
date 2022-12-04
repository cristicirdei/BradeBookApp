import React from "react";
import Input from "../molecules/Input";

const AddStudentsForm = () => {
  return (
    <form className="add-form">
      <div className="details-zone">
        <h2>Student Details</h2>

        <Input
          type="text"
          name="Name"
          placeholder="Enter the name of the student"
        ></Input>

        <Input
          type="text"
          name="Surname"
          placeholder="Enter the surname of the student"
        ></Input>

        <Input
          type="text"
          name="ID"
          placeholder="Enter the ID of the student"
        ></Input>

        <Input
          type="number"
          name="Age"
          placeholder="Enter the age of the student"
        ></Input>
      </div>
      <div className="footer-zone">
        <input type="submit" value="Add Student"></input>
      </div>
    </form>
  );
};
export default AddStudentsForm;
