import React from "react";

const Select = ({ name, placeholder, options }) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>{placeholder}</label>
      <select id={name}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Select;
