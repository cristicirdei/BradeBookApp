/*
page with all students
*/

import React from "react";
import StudentCard from "../components/molecules/StudentCard";
import AddButton from "../components/atoms/AddButton";
import { fakeTeachersList } from "../fakeData";

const Teachers = () => {
  return (
    <div className="page">
      <h1>Teachers</h1>
      <p>Here are all the teachers</p>

      <div className="classes-container">
        {fakeTeachersList.map((teacher, index) => (
          <StudentCard
            key={index}
            link={"/view/teacher"}
            name={teacher}
          ></StudentCard>
        ))}
        <AddButton link="/add/teachers" page="Add Teacher"></AddButton>
      </div>
    </div>
  );
};
export default Teachers;
