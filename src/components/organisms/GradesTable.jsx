import React, { useState } from "react";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { BACKEND_URL } from "../../utils/constants";
import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));

fontawesome.library.add(faSquarePlus);

const GradesTable = ({ grades, classId }) => {
  const adm = user.type === "admin" ? "admin" : "user";

  const refresh = () => window.location.reload(true);

  const request = async (e) => {
    e.preventDefault();
    console.log("request called");
    if (changes && changes.length > 0) {
      console.log("mod grd ", changes);
      try {
        const res = await axios.post(
          `${BACKEND_URL}/grades/change`,
          {
            class: classId,
            changes: changes,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        console.log(res.data);
      } catch (e) {
        alert(e);
      }
    }

    if (newGrade) {
      console.log("new grd ", changes);
      try {
        const res = await axios.post(
          `${BACKEND_URL}/grades/new`,
          {
            class: classId,
            gradeName: newGrade,
            values: newGrades,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        console.log(res.data);
      } catch (e) {
        alert(e);
      }
    }
    refresh();
  };

  /*useEffect(() => {
    const fetchStudentsData = async () => {
      try {
        const response = await fetch(
          `${BACKEND_URL}/students/all/${user.institution}`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        const json = await response.json();
        console.log(json);
        setStudents(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchStudentsData();
  }, []);*/

  const [changes, setChanges] = useState([]);
  const [newGrades, setNewGrades] = useState([]);

  const [addNew, setAddNew] = useState(false);
  const [newGrade, setNewGrade] = useState();

  const class1 = grades;

  return (
    <div className="table-container ">
      <table>
        <thead>
          <tr>
            {class1.grades.length > 0 ? (
              <th>Student</th>
            ) : (
              <th>No grades yet</th>
            )}
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
            <span className={`${adm}-color`}>
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
            className={`${adm}`}
            onClick={request}
          ></input>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default GradesTable;
