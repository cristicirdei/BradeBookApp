import React from "react";

const Textarea = ({ name, placeholder }) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>{name}</label>
      <textarea id={name} placeholder={placeholder}></textarea>
    </div>
  );
};
export default Textarea;
