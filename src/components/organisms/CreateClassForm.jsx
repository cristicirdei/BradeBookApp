/*
form for creating a new class
*/

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../molecules/Input";
import Select from "../molecules/Select";
import Textarea from "../molecules/Textarea";
import { user } from "../../data/userData";
import { BACKEND_URL } from "../../utils/constants";
import axios from "axios";

const CreateClassForm = () => {
  let navigate = useNavigate();

  const [checkedStudentsList, setCheckedStudentsList] = useState([]);
  const [searchStudentsList, setSearchStudentsList] = useState([]);

  const [students, setStudents] = useState();
  const [teachers, setTeachers] = useState();

  const [data, setData] = useState({
    name: "",
    subject: "",
    nr: "",
    teacher: null,
    description: "",
    students: [],
  });

  const getCodded = (list) => {
    const data = Array.from(
      checkedStudentsList,
      (s) => students.payload.find((x) => x.name === s).id
    );
    return data;
  };

  const addSt = () => {
    setData((prevState) => ({
      ...prevState,
      students: getCodded(checkedStudentsList),
    }));
  };

  const request = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${BACKEND_URL}/classes/${user.institution}`,
        {
          name: data.name,
          subject: data.subject,
          nr: data.nr,
          teacher: data.teacher,
          description: data.description,
          students: data.students,
        }
      );
      console.log(res.data);
    } catch (e) {
      alert(e);
    }
    navigate("/classes");
  };

  useEffect(() => {
    const fetchStudentsData = async () => {
      try {
        const response = await fetch(
          `${BACKEND_URL}/students/all/${user.institution}`
        );
        const json = await response.json();
        console.log(json);
        setStudents(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    const fetchTeachersData = async () => {
      try {
        const response = await fetch(
          `${BACKEND_URL}/teachers/all/${user.institution}`
        );
        const json = await response.json();
        console.log(json);
        setTeachers(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchStudentsData();
    fetchTeachersData();
  }, []);

  const list = students ? students.payload.map((s) => s.name) : [];
  const tList = teachers ? teachers.payload : [];

  const search = (term) =>
    setSearchStudentsList(
      term !== ""
        ? list
            .filter((x) => !checkedStudentsList.includes(x))
            .filter((word) => word.toLowerCase().includes(term.toLowerCase()))
        : []
    );

  return (
    <form className="create-form" onSubmit={request}>
      <div className="details-zone">
        <h2>Class Details</h2>

        <Input
          type="text"
          name="Name"
          placeholder="Enter a name for the class"
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              name: e.target.value,
            }))
          }
        ></Input>

        <Input
          type="text"
          name="Subject"
          placeholder="Enter the subject of the class"
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              subject: e.target.value,
            }))
          }
        ></Input>

        <Input
          type="text"
          name="ID"
          placeholder="Enter the ID of the class"
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              nr: e.target.value,
            }))
          }
        ></Input>

        {teachers ? (
          <Select
            name="Teacher"
            placeholder="Teacher"
            options={tList}
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                teacher: tList.find((t) => t.name === e.target.value).id,
              }))
            }
          ></Select>
        ) : (
          ""
        )}

        <Textarea
          name="Description"
          placeholder="Enter a description of the class"
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              description: e.target.value,
            }))
          }
        ></Textarea>
      </div>
      <div className="students-zone">
        <h2>Students</h2>
        <input
          type="text"
          placeholder="Search"
          className="search-student"
          onChange={(e) => search(e.target.value)}
        />
        <div className={searchStudentsList.length ? "search-zone" : "list"}>
          {searchStudentsList.length
            ? searchStudentsList.map((name, index) => (
                <div className="input-group-student" key={index}>
                  <label htmlFor={name} className="main">
                    {name}
                    <input
                      type="checkbox"
                      id={name}
                      value={name}
                      onChange={(e) => {
                        console.log("added " + e.target.value);
                        setCheckedStudentsList([
                          ...checkedStudentsList,
                          e.target.value,
                        ]);
                        setSearchStudentsList(
                          searchStudentsList.filter((a) => a !== name)
                        );
                      }}
                    ></input>
                    <span className="geek-mark"></span>
                  </label>
                </div>
              ))
            : ""}
        </div>
        <div className="list">
          {checkedStudentsList.length
            ? checkedStudentsList.map((name, index) => (
                <div className="input-group-student" key={index}>
                  <label htmlFor={name} className="main">
                    {name}
                    <input
                      type="checkbox"
                      id={name}
                      value={name}
                      checked
                      onChange={(e) => {
                        console.log("removed " + e.target.value);
                        setCheckedStudentsList(
                          checkedStudentsList.filter((a) => a !== name)
                        );
                      }}
                    ></input>
                    <span className="geek-mark-check"></span>
                  </label>
                </div>
              ))
            : "No students enrolled"}
        </div>
      </div>
      <div className="footer-zone" onClick={addSt}>
        <input type="submit" value="Create Class"></input>
      </div>
    </form>
  );
};
export default CreateClassForm;
