import React, { useState } from "react";
import { classGrades } from "../../fakeData";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

fontawesome.library.add(faSquarePlus);

const Table = () => {
  const [changes, setChanges] = useState([]);
  const class1 = classGrades;

  return (
    <div className="table-container ">
      <table>
        <thead>
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
                  <input
                    type="number"
                    min="1"
                    max="10"
                    defaultValue={grade.value}
                    onInput={(e) => {
                      e.preventDefault();
                      setChanges([
                        ...changes,
                        {
                          student: student.name,
                          grade: grade.name,
                          value: e.target.value,
                        },
                      ]);
                    }}
                  ></input>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="add-zone">
        <button className="addButton-simple">
          <span>
            <FontAwesomeIcon icon="square-plus" />
          </span>
          Add Grade
        </button>
      </div>

      <div className="footer-zone">
        <input
          type="submit"
          value="Save Changes"
          onClick={(e) => {
            e.preventDefault();
            console.log(changes);
          }}
        ></input>
      </div>
    </div>
  );
};

export default Table;
