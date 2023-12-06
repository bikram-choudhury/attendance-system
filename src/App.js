import React from "react";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Attendance from "./Screens/Attendance";
import AddCourse from "./Screens/AddCourse";
import CourseList from "./Screens/CourseList";
import AddStudent from "./Screens/AddStudent";
import { CourseContext } from "./context/Course";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="main-wrapper">
        <Header />
        <SideBar />
        <CourseContext>
          <div className="page-wrapper">
            <Routes>
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/course/add" element={<AddCourse />} />
              <Route path="/course/list" element={<CourseList />} />
              <Route path="/student/add" element={<AddStudent />} />
              <Route path="/student/list" element={<CourseList />} />
            </Routes>
          </div>
        </CourseContext>
      </div>
    </BrowserRouter>
  )
}

export default App;
