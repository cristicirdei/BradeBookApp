/*
page to create a class
*/

import React from "react";
import CreateClassForm from "../components/organisms/CreateClassForm";

const CreateClass = () => {
  return (
    <div className="page">
      <h1>Create a new class</h1>
      <p>Enter class details and add students to the class.</p>
      <CreateClassForm></CreateClassForm>
    </div>
  );
};
export default CreateClass;
