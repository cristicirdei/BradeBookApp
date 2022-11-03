import { BrowserRouter, Route, Routes } from "react-router-dom";
import Classes from "./pages/Classes";
import Students from "./pages/Students";
import LandingPage from "./pages/LandingPage";
import CreateClass from "./pages/CreateClass";
import AddStudents from "./pages/AddStudents";
import Class from "./pages/Class";
import Attendance from "./pages/Attendance";
import Grades from "./pages/Grades";
import StudentReport from "./pages/StudentReport";
import Menu from "./components/molecules/Menu";
import Reports from "./pages/Reports";
import Header from "./components/molecules/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Menu />
        <div className="col-10">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/students" element={<Students />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/add/students" element={<AddStudents />} />
            <Route path="/add/classes" element={<CreateClass />} />
            <Route path="/add/grades" element={<Grades />} />
            <Route path="/add/attendance" element={<Attendance />} />
            <Route path="/view/class" element={<Class />} />
            <Route path="/view/student" element={<StudentReport />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
