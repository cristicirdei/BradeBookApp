import React from "react";

const IndividualAttendanceTableView = ({ name, values }) => {
  return (
    <table className="view-table">
      <thead>
        <tr>
          <th colSpan={3} className="table-title">
            {name}
          </th>
        </tr>
        <tr>
          {values.map((a, index) => (
            <th key={index}>{a.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {values.map((a, index) => (
            <td key={index}>
              <p className="centered">{a.value}</p>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default IndividualAttendanceTableView;
