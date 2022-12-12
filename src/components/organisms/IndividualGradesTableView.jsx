import React from "react";

const IndividualGradesTableView = ({ name, values }) => {
  return (
    <table className="view-table">
      <thead>
        <tr>
          <th colSpan={3} className="table-title">
            {name}
          </th>
        </tr>
        <tr>
          {values.map((g, index) => (
            <th key={index}>{g.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {
          <tr>
            {values.map((g, index) => (
              <td key={index}>
                <p className="centered">{g.value}</p>
              </td>
            ))}
          </tr>
        }
      </tbody>
    </table>
  );
};

export default IndividualGradesTableView;
