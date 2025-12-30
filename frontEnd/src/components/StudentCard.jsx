function StudentCard({ sName, grade }) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Student Name: {sName}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Grade: {grade}
          </h6>
          <p className="card-text">
            {sName} is the student os {grade}
          </p>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
