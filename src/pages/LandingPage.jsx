import React from "react";
import AddButton from "../components/atoms/AddButton";

const LandingPage = () => {
  return (
    <>
      <h1>Hello Style!</h1>
      <p>You landed</p>

      <br></br>
      <br></br>
      <AddButton link="/add/class" page="Add Class"></AddButton>
      <br></br>
      <br></br>
    </>
  );
};
export default LandingPage;
