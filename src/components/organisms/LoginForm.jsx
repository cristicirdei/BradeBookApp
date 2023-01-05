import React, { useState } from "react";
import Input from "../molecules/Input";
import { BACKEND_URL } from "../../utils/constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";

const LoginForm = () => {
  let navigate = useNavigate();

  const [data, setData] = useState({
    email: null,
    password: null,
  });

  const request = async (e) => {
    e.preventDefault();
    console.log(data);

    try {
      const res = await axios.post(`${BACKEND_URL}/auth/login`, {
        email: data.email,
        password: data.password,
      });
      console.log("login data: ", res.data);

      localStorage.setItem("token", res.data.token);
    } catch (e) {
      alert(e);
    }

    navigate("/welcome");
  };

  return (
    <form className="auth-form" onSubmit={request}>
      <div className="details-zone">
        <h2>Login</h2>

        <Input
          type="text"
          name="User"
          placeholder="Enter the user email"
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
          placeholder="Enter the password"
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              password: e.target.value,
            }))
          }
        ></Input>

        <input type="submit" value="Login"></input>
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default LoginForm;
