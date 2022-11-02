import React from "react";
import MenuButton from "../components/atoms/MenuButton";
import AddButton from "../components/atoms/AddButton";

const LandingPage = () => {
  return (
    <>
      <h1>Hello Style!</h1>
      <p>You landed</p>
      <MenuButton link="/classes" page="Classes"></MenuButton>
      <br></br>
      <br></br>
      <AddButton link="/add/class" page="Add Class"></AddButton>
    </>
  );
};
export default LandingPage;
