import React from "react";
import Input from "../molecules/Input";

const AddTeachersForm = () => {
  return (
    <form className="add-form">
      <div className="details-zone">
        <h2>Teacher Details</h2>

        <Input
          type="text"
          name="Name"
          placeholder="Enter the name of the teacher"
        ></Input>

        <Input
          type="text"
          name="Surname"
          placeholder="Enter the surname of the teacher"
        ></Input>

        <Input
          type="text"
          name="ID"
          placeholder="Enter the ID of the teacher"
        ></Input>

        <Input
          type="number"
          name="Age"
          placeholder="Enter the age of the teacher"
        ></Input>
      </div>
      <div className="footer-zone">
        <input type="submit" value="Add Teacher"></input>
      </div>
    </form>
  );
};
export default AddTeachersForm;
