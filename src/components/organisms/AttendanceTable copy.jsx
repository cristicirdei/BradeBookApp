import React, { useState } from "react";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { classGrades, classAttendance } from "../../fakeData";

fontawesome.library.add(faSquarePlus);

const Table = () => {
  const [changes, setChanges] = useState([]);

  const [addNew, setAddNew] = useState(false);

  const class1 = classGrades;

  return (
    <div className="table-container-attendance">
      <table>
        <thead>
          <tr>
            <th>Student</th>
            {classAttendance.dates.map((date, index) => (
              <th key={index}>{date}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {classAttendance.students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              {student.att.map((date, index) => (
                <td key={index}>
                  <p
                    className={
                      date.value === "Present"
                        ? "green"
                        : date.value === "Absent"
                        ? "red"
                        : date.value === "Motivated"
                        ? "yellow"
                        : "gray"
                    }
                  ></p>
                </td>
              ))}

              {addNew ? (
                <td>
                  <input></input>
                </td>
              ) : (
                ""
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {addNew ? (
        ""
      ) : (
        <div className="add-zone">
          <button
            className="addButton-simple"
            onClick={() => {
              setAddNew(true);
            }}
          >
            <span>
              <FontAwesomeIcon icon="square-plus" />
            </span>
            Add Date
          </button>
        </div>
      )}
      {changes.length || addNew ? (
        <div className="footer-zone">
          <input
            type="submit"
            value="Save Changes"
            onClick={(e) => {
              console.log("changes: ", changes);
            }}
          ></input>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Table;
