import { useEffect, useState } from "react";
import { getCourses } from "../services/services";
import AllCoursesCard from "../components/AllCoursesCard";

function Courses() {
  const [courses, setCourses] = useState([]);
  const getCours = async () => {
    const res = await getCourses();
    // console.log(res.data);
    setCourses(res.data);
    // console.log(courses);

    // console.log(courses);
  };
  useEffect(() => {
    getCours();
  }, []);
  //   useEffect(() => {
  //     console.log(courses);
  //   }, [courses]);
  return (
    <div style={{ display: "flex", gap: "12px" }}>
      {courses.map((cours, index) => (
        <div key={index}>
          <AllCoursesCard
            title={cours.title}
            description={cours.description}
            teacher={cours.teacher}
            price={cours.price}
          />
        </div>
      ))}
    </div>
  );
}

export default Courses;
