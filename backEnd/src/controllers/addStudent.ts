import { Request, Response } from "express";
import studentModel from "../models/studentModel";

const addStudent = async (req: Request, res: Response) => {
  try {
    const { sName, grade } = req.body;

    const createStudent = new studentModel({
      sName,
      grade,
    });

    const addedStudent = createStudent.save();
    console.log("Student added");
    res.status(200).json({
      message: "Student created Sucessfully..",
      student: {
        _id: (await addedStudent)._id,
        sName: (await addedStudent).sName,
        grade: (await addedStudent).grade,
      },
    });
    // res.send(addedStudent);
  } catch (error) {
    console.log("error:", error);
    res.status(400).json({
      Message: "Somthing GOes WRong please check.....",
    });
  }
};

export default addStudent;
