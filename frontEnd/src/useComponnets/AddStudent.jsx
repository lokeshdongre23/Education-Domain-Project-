import React, { useState } from "react";
import { setStudent } from "../services/services";
import "./AddStudent.css";

const AddStudent = ({ onUserAdded }) => {
  const [formData, setFormData] = useState({
    sName: "",
    grade: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await setStudent(formData);
      alert("Student Create!");

      setFormData({
        sName: "",
        grade: "",
      });

      if (onUserAdded) {
        onUserAdded();
      }
    } catch (error) {
      console.error("Error creating student:", error);
      alert("Failed to create student");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <h1>Create Student</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Student Name</label>
          <input
            type="text"
            name="sName"
            value={formData.sName}
            onChange={handleChange}
            placeholder="Enter student name"
            required
          />
        </div>

        <div className="form-group">
          <label>Grade</label>
          <input
            type="text"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            placeholder="Enter grade"
          />
        </div>

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Create Student"}
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
