// import AllCoursesCard from "./components/AllCoursesCard";
import { Route, Routes } from "react-router-dom";
import AddStudent from "./useComponnets/AddStudent";
import Courses from "./useComponnets/Courses";
import Students from "./useComponnets/Students";
import NavBar from "./components/NavBar";
import SignUppage from "./useComponnets/SignUppage";
import UserLogin from "./useComponnets/UserLogin";
import Logout from "./useComponnets/Logout";

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
        <Route path="/signUp" element={<SignUppage />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}

export default App;
