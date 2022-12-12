import React, { useState } from "react";
import { classGrades } from "../../fakeData";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

fontawesome.library.add(faSquarePlus);

const GradesTable = () => {
  const [changes, setChanges] = useState([]);
  const [newGrades, setNewGrades] = useState([]);

  const [addNew, setAddNew] = useState(false);
  const [newGrade, setNewGrade] = useState();

  const class1 = classGrades;

  const onClick = () => {
    /*console.log("new grades", newGrades);*/
    if (newGrades.length) {
      let list = [];
      newGrades.map(
        (grade) =>
          (list = [
            ...list,
            {
              student: grade.student,
              grade: newGrade,
              value: grade.value,
            },
          ])
      );

      setChanges([...changes, ...list]);
      console.log("adding new grade values to changes");
    }
  };

  return (
    <div className="table-container ">
      <table>
        <thead>
          <tr>
            <th>Student</th>
            {class1.grades.map((gradeName, index) => (
              <th key={index}>{gradeName}</th>
            ))}
            {addNew ? (
              <th>
                <input
                  type="text"
                  defaultValue="New"
                  onInput={(e) => {
                    setNewGrade(e.target.value);
                  }}
                ></input>
              </th>
            ) : (
              ""
            )}
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
                      let newChange = changes.find(
                        (c) =>
                          c.student === student.name && c.grade === grade.name
                      );
                      if (newChange) {
                        console.log("already in the list");
                        let ch = changes;
                        ch.splice(changes.indexOf(newChange), 1, {
                          student: student.name,
                          grade: grade.name,
                          value: e.target.value,
                        });

                        setChanges(ch);
                      } else
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

              {addNew ? (
                <td>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    onInput={(e) => {
                      e.preventDefault();

                      let newChange = newGrades.find(
                        (c) => c.student === student.name
                      );
                      if (newChange) {
                        console.log("already in the list");
                        let ch = newGrades;
                        ch.splice(newGrades.indexOf(newChange), 1, {
                          student: student.name,
                          value: e.target.value,
                        });

                        setNewGrades(ch);
                      } else
                        setNewGrades([
                          ...newGrades,
                          {
                            student: student.name,
                            value: e.target.value,
                          },
                        ]);
                      console.log("new grade value " + student.name);
                    }}
                  ></input>
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
            Add Grade
          </button>
        </div>
      )}
      {changes.length || addNew ? (
        <div className="footer-zone">
          <input
            type="submit"
            value="Save Changes"
            onClick={(e) => {
              onClick();
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

export default GradesTable;
