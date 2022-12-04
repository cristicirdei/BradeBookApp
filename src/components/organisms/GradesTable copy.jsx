import React, { useState } from "react";
import { fakeGradesList, classGrades } from "../../fakeData";

const Table = () => {
  const [changes, setChanges] = useState([]);
  const class1 = classGrades;
  console.log(fakeGradesList);

  return (
    <div className="table-container ">
      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Grade 1</th>
            <th>Grade 2</th>
          </tr>
        </thead>
        <tbody>
          {fakeGradesList.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  max="10"
                  defaultValue={student.grade1}
                  onChange={(e) => {
                    setChanges([
                      ...changes,
                      {
                        student: student,
                        grade1: e.value,
                      },
                    ]);
                    console.log(changes);
                  }}
                ></input>
              </td>
              <td>
                <input
                  type="number"
                  min="1"
                  max="10"
                  defaultValue={(student.grade1 % 10) + 1}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="footer-zone">
        <input type="submit" value="Save Changes"></input>
      </div>
    </div>
  );
};

export default Table;
