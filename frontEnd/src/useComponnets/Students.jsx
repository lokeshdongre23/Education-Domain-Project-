import React, { useEffect, useState } from "react";
import { getStudents } from "../services/services";
import StudentCard from "../components/studentCard";

function Students() {
  const [student, setStudent] = useState([]);
  const getStudentdata = async () => {
    const res = await getStudents();

    console.log(res.data);
    setStudent(res.data);
  };
  useEffect(() => {
    getStudentdata();
  }, []);
  return (
    <div>
      {student.map((elem, idex) => (
        <div key={idex}>
          <StudentCard sName={elem.sName} grade={elem.grade} />
        </div>
      ))}
    </div>
  );
}

export default Students;
