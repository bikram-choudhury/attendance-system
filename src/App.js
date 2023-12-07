import React from "react";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Attendance from "./Screens/Attendance";
import AddCourse from "./Screens/AddCourse";
import CourseList from "./Screens/CourseList";
import AddStudent from "./Screens/AddStudent";
import { CourseContext } from "./context/Course";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import StudentList from "./Screens/StudentList";
import { StudentContext } from "./context/Student";

function App() {

  return (
    <BrowserRouter>
      <div className="main-wrapper">
        <Header />
        <SideBar />
        <CourseContext>
          <StudentContext>
            <div className="page-wrapper">
              <Routes>
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/course/add" element={<AddCourse />} />
                <Route path="/course/list" element={<CourseList />} />
                <Route path="/student/add" element={<AddStudent />} />
                <Route path="/student/list" element={<StudentList />} />
                <Route path="*" element={<Navigate to="/student/add" replace />} />
              </Routes>
            </div>
          </StudentContext>
        </CourseContext>
      </div>
    </BrowserRouter>
  )
}

export default App;
