import React from "react";

const Select = ({ name, placeholder, options, onChange }) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>{placeholder}</label>
      <select id={name} onChange={onChange}>
        <option></option>
        {options &&
          options.map((option, index) => (
            <option key={index} value={option.name}>
              {option.name}
            </option>
          ))}
      </select>
    </div>
  );
};
export default Select;
