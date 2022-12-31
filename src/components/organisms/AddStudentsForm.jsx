import React, { useState } from "react";
import Input from "../molecules/Input";
import { user } from "../../data/userData";
import { BACKEND_URL } from "../../utils/constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddStudentsForm = () => {
  let navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    surname: "",
    nr: "",
    age: null,
  });

  const request = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${BACKEND_URL}/students/${user.institution}`,
        {
          name: data.name,
          surname: data.surname,
          nr: data.nr,
          age: data.age,
        }
      );
      console.log(res.data);
    } catch (e) {
      alert(e);
    }
    navigate("/students");
  };

  return (
    <form className="add-form" onSubmit={request}>
      <div className="details-zone">
        <h2>Student Details</h2>

        <Input
          type="text"
          name="Name"
          placeholder="Enter the name of the student"
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
          placeholder="Enter the surname of the student"
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
          placeholder="Enter the ID of the student"
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
          placeholder="Enter the age of the student"
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              age: e.target.value,
            }))
          }
        ></Input>
      </div>
      <div className="footer-zone">
        <input type="submit" value="Add Student"></input>
      </div>
    </form>
  );
};
export default AddStudentsForm;
