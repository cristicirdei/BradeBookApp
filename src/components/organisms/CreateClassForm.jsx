/*
form for creating a new class
*/

import React, { useState } from "react";
import Input from "../molecules/Input";
import Select from "../molecules/Select";
import Textarea from "../molecules/Textarea";
import { fakeStudentsList, fakeTeachersList } from "../../fakeData";

const CreateClassForm = () => {
  const list = fakeStudentsList;
  const tList = fakeTeachersList;

  const [checkedStudentsList, setCheckedStudentsList] = useState([]);
  const [searchStudentsList, setSearchStudentsList] = useState([]);

  const search = (term) =>
    setSearchStudentsList(
      term !== ""
        ? list
            .filter((x) => !checkedStudentsList.includes(x))
            .filter((word) => word.toLowerCase().includes(term.toLowerCase()))
        : []
    );

  return (
    <form className="create-form">
      <div className="details-zone">
        <h2>Class Details</h2>

        <Input
          type="text"
          name="Name"
          placeholder="Enter a name for the class"
        ></Input>

        <Input
          type="text"
          name="Subject"
          placeholder="Enter the subject of the class"
        ></Input>

        <Input
          type="text"
          name="ID"
          placeholder="Enter the ID of the class"
        ></Input>

        <Select name="Teacher" placeholder="Teacher" options={tList}></Select>

        <Textarea
          name="Description"
          placeholder="Enter a description of the class"
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
      <div className="footer-zone">
        <input type="submit" value="Create Class"></input>
      </div>
    </form>
  );
};
export default CreateClassForm;
