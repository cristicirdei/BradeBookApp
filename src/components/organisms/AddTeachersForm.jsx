import React, { useState } from "react";
import Input from "../molecules/Input";
import { user } from "../../data/userData";
import { BACKEND_URL } from "../../utils/constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTeachersForm = () => {
  let navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    surname: "",
    nr: "",
    age: null,
    email: null,
    password: null,
    passwordCon: null,
  });

  const request = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${BACKEND_URL}/teachers/${user.institution}`,
        {
          name: data.name,
          surname: data.surname,
          nr: data.nr,
          age: data.age,
          email: data.email,
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      console.log(res.data);
    } catch (e) {
      alert(e);
    }
    navigate("/teachers");
  };

  return (
    <form className="add-form" onSubmit={request}>
      <div className="details-zone">
        <h2>Teacher Details</h2>

        <Input
          type="text"
          name="Name"
          placeholder="Enter the name of the teacher"
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              name: e.target.value,
            }))
          }
        ></Input>

        <Input
          type="text"
          name="Surname"
          placeholder="Enter the surname of the teacher"
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              surname: e.target.value,
            }))
          }
        ></Input>

        <Input
          type="text"
          name="ID"
          placeholder="Enter the ID of the teacher"
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              nr: e.target.value,
            }))
          }
        ></Input>

        <Input
          type="number"
          name="Age"
          placeholder="Enter the age of the teacher"
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              age: e.target.value,
            }))
          }
        ></Input>

        <br></br>
        <br></br>
        <h3>Authentication Details</h3>
        <p>Enter the credentials to be used by the teacher</p>
        <br></br>

        <Input
          type="email"
          name="Email"
          placeholder="Enter the email that the teacher will use"
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
              passwordConfirm: e.target.value,
            }))
          }
        ></Input>
      </div>
      <div className="footer-zone">
        <input type="submit" value="Add Teacher"></input>
      </div>
    </form>
  );
};
export default AddTeachersForm;
