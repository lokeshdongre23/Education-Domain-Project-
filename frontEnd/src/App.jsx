// import AllCoursesCard from "./components/AllCoursesCard";
import AddStudent from "./useComponnets/AddStudent";
import Courses from "./useComponnets/Courses";
import Students from "./useComponnets/Students";

function App() {
  return (
    <>
      <h1>
        <br />
        <u>Course List</u>
      </h1>
      <Courses />
      <h1>
        <br />
        <u>Student List</u>
      </h1>

      <Students />
    </>
  );
}

export default App;
