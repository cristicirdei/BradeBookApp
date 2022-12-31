import React from "react";

const GradesTableView = ({ grades }) => {
  const class1 = grades;

  return (
    <table className="view-table">
      <thead>
        <tr>
          <th colSpan={class1.grades.length + 1} className="table-title">
            Grades
          </th>
        </tr>
        <tr>
          <th>Student</th>
          {class1.grades.map((gradeName, index) => (
            <th key={index}>{gradeName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {class1.students.map((student, index) => (
          <tr key={index}>
            <td>{student.name}</td>
            {student.grades.map((grade, index) => (
              <td key={index}>
                <p className="centered">{grade.value}</p>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GradesTableView;
