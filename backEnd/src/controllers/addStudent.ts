import { Request, Response } from "express";
import studentModel from "../models/studentModel";

const addStudent = async (req: Request, res: Response) => {
  try {
    const { sName, grade } = req.body;
    const creteatedBy = req.user._id;
    // console.log(createdBy);
    // console.log(req.user._id);
    // const createrId = ;

    const createStudent = new studentModel({
      sName,
      grade,
      creteatedBy,
    });
    // console.log(createStudent);

    const addedStudent = await createStudent.save();
    // console.log("hello");

    // console.log(addedStudent._id);
    // console.log(creteatedBy);

    // console.log("Student added");
    res.status(200).json({
      message: "Student created Sucessfully..",
      student: {
        _id: addedStudent._id,
        sName: addedStudent.sName,
        grade: addedStudent.grade,
        creteatedBy: creteatedBy,
        // creteatedBy: addedStudent.creteatedBy,
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
