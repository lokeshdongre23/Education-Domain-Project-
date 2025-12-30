import "./AlllCourses.css";
function AllCoursesCard({ title, description, teacher, price }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Course Title: {title}</h5>
        <p className="card-text">Description:{description}</p>
        <p className="card-text">Instructor:{teacher}</p>
        <p className="card-text">Price:{price}</p>
        <button>buy</button>
      </div>
    </div>
  );
}

export default AllCoursesCard;
