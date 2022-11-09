import { faker } from "@faker-js/faker";

const fakeStudentsList = Array.apply(null, Array(15)).map(function (i) {
  return faker.name.fullName();
});

const fakeTeachersList = Array.apply(null, Array(5)).map(function (i) {
  return faker.name.fullName();
});

export { fakeStudentsList, fakeTeachersList };
