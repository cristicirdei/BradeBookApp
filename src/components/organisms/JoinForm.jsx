import React, {useState} from "react";
import Input from "../molecules/Input";
import { user } from "../../data/userData";
import { BACKEND_URL } from "../../utils/constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const JoinForm = () => {
  let navigate = useNavigate();

  const [data, setData] = useState({
    email: null,
    password: null,
  });

  const request = async (e) => {
    e.preventDefault();

    navigate("/auth");
  };

  return (
    <form className="auth-form" onSubmit={request}>
      <div className="details-zone">
        <h2>Join</h2>

        <Input
          type="text"
          name="Name"
          placeholder="Enter institution name"
        ></Input>

        <Input type="text" name="Email" placeholder="Enter your email"></Input>

        <Input
          type="password"
          name="Password"
          placeholder="Enter a password"
        ></Input>

        <Input
          type="password"
          name="Confirm Password"
          placeholder="Re-enter the password"
        ></Input>

        <input type="submit" value="Join"></input>
      </div>
    </form>
  );
};
export default JoinForm;
