import React from "react";

const Input = ({ type, name, placeholder }) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>{name}</label>
      <input type={type} id={name} placeholder={placeholder}></input>
    </div>
  );
};
export default Input;
