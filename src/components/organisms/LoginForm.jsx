import React from "react";
import Input from "../molecules/Input";

const LoginForm = () => {
  return (
    <form className="auth-form">
      <div className="details-zone">
        <h2>Login</h2>

        <Input
          type="text"
          name="User"
          placeholder="Enter the user email"
        ></Input>

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
export default LoginForm;
