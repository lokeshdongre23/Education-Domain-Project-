import React from "react";
import { getCourses } from "../services/services";

function AllCoursesCard() {
  const getallCourses = getCourses();
  console.log(getallCourses);
  console.log(getallCourses);

  return (
    <div className="card" style="width: 18rem;">
      <div className="card-body">
        <h5 className="card-title">Course Title: </h5>
        <p className="card-text">Description:</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default AllCoursesCard;
