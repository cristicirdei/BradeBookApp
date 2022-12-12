import React from "react";
import Input from "../molecules/Input";

const JoinForm = () => {
  return (
    <form className="auth-form">
      <div className="details-zone">
        <h2>Join</h2>

        <Input type="text" name="Name" placeholder="Enter ... name"></Input>

        <Input type="text" name="Email" placeholder="Enter your email"></Input>

        <Input
          type="password"
          name="Password"
          placeholder="Enter the password"
        ></Input>

        <input type="submit" value="Login"></input>
      </div>
    </form>
  );
};
export default JoinForm;
