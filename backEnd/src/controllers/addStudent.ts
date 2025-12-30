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
      response: res.send(addedStudent),
    });
  } catch (error) {
    console.log("error:", error);
    res.status(400).json({
      Message: "Somthing GOes WRong please check.....",
    });
  }
};
