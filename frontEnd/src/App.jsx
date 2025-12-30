// import AllCoursesCard from "./components/AllCoursesCard";
import { Route, Routes } from "react-router-dom";
import AddStudent from "./useComponnets/AddStudent";
import Courses from "./useComponnets/Courses";
import Students from "./useComponnets/Students";
import NavBar from "./components/NavBar";

function App() {
  // return (
  //   <>
  //     <h1>
  //       <br />
  //       <u>Course List</u>
  //     </h1>
  //     <Courses />
  //     <h1>
  //       <br />
  //       <u>Student List</u>
  //     </h1>

  //     <Students />
  //   </>
  // );
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/students" element={<Students />} />
        <Route path="/add-student" element={<AddStudent />} />
      </Routes>
    </>
  );
}

export default App;
