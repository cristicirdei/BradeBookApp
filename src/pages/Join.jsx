import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/molecules/Input";
import { user } from "../data/userData";
import { BACKEND_URL } from "../utils/constants";
import axios from "axios";

import iconProf from "../resources/chalkboard-user-solid.svg";
import iconInst from "../resources/building-columns-solid.svg";

const Join = () => {
  const [typeInst, setTypeInst] = useState(false);
  let navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: null,
    password: null,
    passwordCon: null,
  });

  const request = async (e) => {
    e.preventDefault();
    console.log(data);
    navigate("/auth");
  };

  return (
    <div className="page-over">
      <form className="auth-form" onSubmit={request}>
        <div className="details-zone">
          <h2>Sign up</h2>

          <Input
            type="text"
            name="Name"
            placeholder="Enter institution name"
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                name: e.target.value,
              }))
            }
          ></Input>

          <Input
            type="text"
            name="Email"
            placeholder="Enter your email"
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                email: e.target.value,
              }))
            }
          ></Input>

          <Input
            type="password"
            name="Password"
            placeholder="Enter a password"
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                password: e.target.value,
              }))
            }
          ></Input>

          <Input
            type="password"
            name="Confirm Password"
            placeholder="Re-enter the password"
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                passwordCon: e.target.value,
              }))
            }
          ></Input>

          <input type="submit" value="Sign up"></input>
        </div>
      </form>
    </div>
  );
};
export default Join;
