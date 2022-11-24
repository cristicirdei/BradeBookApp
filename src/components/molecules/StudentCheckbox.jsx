import React from "react";

const StudentCheckbox = ({ name }) => {
  return (
    <div className="input-group-student">
      <label htmlFor={name} className="main">
        {name}
        <input type="checkbox" id={name} value={name}></input>
        <span className="geek-mark"></span>
      </label>
    </div>
  );
};
export default StudentCheckbox;
