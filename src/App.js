import { BrowserRouter, Route, Routes } from "react-router-dom";
import Classes from "./pages/Classes";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import LandingPage from "./pages/LandingPage";
import CreateClass from "./pages/CreateClass";
import AddStudents from "./pages/AddStudents";
import AddTeachers from "./pages/AddTeachers";
import Class from "./pages/Class";
import Attendance from "./pages/Attendance";
import Grades from "./pages/Grades";
import StudentReport from "./pages/StudentReport";
import Menu from "./components/molecules/Menu";
import Reports from "./pages/Reports";
import Header from "./components/molecules/Header";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Teacher from "./pages/Teacher";
import Landing from "./pages/Landing";

const user = JSON.parse(localStorage.getItem("user")) || {
  type: "user",
};

function App() {
  /*const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }*/

  return (
    <>
      <BrowserRouter>
        <Header />
        <Menu />
        <div className="col-10">
          {user.type === "admin" && (
            <Routes>
              <Route path="/welcome" element={<LandingPage />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/students" element={<Students />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/add/students" element={<AddStudents />} />
              <Route path="/add/teachers" element={<AddTeachers />} />
              <Route path="/add/classes" element={<CreateClass />} />
              <Route path="/view/class/:id" element={<Class />} />
              <Route path="/view/student/:id" element={<StudentReport />} />
              <Route path="/view/teacher/:id" element={<Teacher />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          )}

          {user.type === "teacher" && (
            <Routes>
              <Route path="/welcome" element={<LandingPage />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/add/grades" element={<Grades />} />
              <Route path="/add/attendance" element={<Attendance />} />
              <Route path="/view/class/:id" element={<Class />} />
              <Route path="/view/student/:id" element={<StudentReport />} />
            </Routes>
          )}
        </div>
      </BrowserRouter>
      <BrowserRouter>
        <div className="col-12">
          <Routes>
            <Route path="/auth" element={<Login />} />
            <Route path="/auth/join" element={<Join />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
