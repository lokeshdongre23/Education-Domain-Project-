import React, { useEffect, useState } from "react";
import { getStudents } from "../services/services";
import StudentCard from "../components/StudentCard.jsx";
import AddStudent from "./AddStudent";

function Students() {
  const [student, setStudent] = useState([]);
  const [err, setErr] = useState(false);
  const getStudentdata = async () => {
    try {
      const res = await getStudents();
      console.log(res.data);
      setStudent(res.data);
      setErr(false);
    } catch (error) {
      setErr(error.response.data.message);
      console.log("error", error);
      // console.log(error.response.data.message);
    }
  };
  useEffect(() => {
    getStudentdata();
  }, []);

  return (
    <>
      {/* <AddStudent onUserAdded={getStudentdata} /> */}
      {err ? (
        <h1>{err}</h1>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            padding: "1rem",
          }}
        >
          {student.map((elem, idex) => (
            <div key={idex}>
              <StudentCard sName={elem.sName} grade={elem.grade} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Students;
