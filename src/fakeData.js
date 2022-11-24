import { faker } from "@faker-js/faker";

const fakeStudentsList = Array.apply(null, Array(15)).map(function (i) {
  return faker.name.fullName();
});

const fakeTeachersList = Array.apply(null, Array(5)).map(function (i) {
  return faker.name.fullName();
});

const fakeGradesList = Array.apply(null, Array(15)).map(function (i) {
  return {
    name: faker.name.fullName(),
    grade1: Math.floor(Math.random() * 10) + 1,
  };
});

const classGrades = {
  name: "Math 1",
  grades: ["Test 1", "Test2"],
  students: [
    {
      name: "Samantha Schinner",
      grades: [
        { name: "Test 1", value: 10 },
        { name: "Test 2", value: 6 },
      ],
    },
    {
      name: "Antonia Kulas",
      grades: [
        { name: "Test 1", value: 7 },
        { name: "Test 2", value: 5 },
      ],
    },
    {
      name: "Lillie Lang",
      grades: [
        { name: "Test 1", value: 8 },
        { name: "Test 2", value: 6 },
      ],
    },
    {
      name: "Sue Parisian",
      grades: [
        { name: "Test 1", value: 7 },
        { name: "Test 2", value: 4 },
      ],
    },
    {
      name: "Anthony Dickens",
      grades: [
        { name: "Test 1", value: 6 },
        { name: "Test 2", value: 8 },
      ],
    },
  ],
};

const classAttendance = {
  name: "Math 1",
  dates: ["22.11.22", "29.11.22"],
  students: [
    {
      name: "Samantha Schinner",
      att: [
        { name: "22.11.22", value: "Absent" },
        { name: "29.11.22", value: "Present" },
      ],
    },
    {
      name: "Antonia Kulas",
      att: [
        { name: "22.11.22", value: "Absent" },
        { name: "29.11.22", value: "Absent" },
      ],
    },
    {
      name: "Lillie Lang",
      att: [
        { name: "22.11.22", value: "Present" },
        { name: "29.11.22", value: "Present" },
      ],
    },
    {
      name: "Sue Parisian",
      att: [
        { name: "22.11.22", value: "Absent" },
        { name: "29.11.22", value: "Motivated" },
      ],
    },
    {
      name: "Anthony Dickens",
      att: [
        { name: "22.11.22", value: "Present" },
        { name: "29.11.22", value: "Present" },
      ],
    },
  ],
};

export {
  fakeStudentsList,
  fakeTeachersList,
  fakeGradesList,
  classGrades,
  classAttendance,
};
