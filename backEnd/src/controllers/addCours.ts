import { Request, Response } from "express";
import { courseModel } from "../models/courseModel";

const addCourses = async (req: Request, res: Response) => {
  try {
    const { title, description, teacher, price } = req.body;

    const newCourse = new courseModel({
      title,
      description,
      teacher,
      price,
    });

    const courseAdded = await newCourse.save();
    // console.log(courseAdded);

    return res.status(200).json({
      message: "course added Succesfully...",
      newCourse: courseAdded,
    });
    // return res.send(courseAdded);
  } catch (error) {
    res.status(400).json({
      message: "somthings Goes WRong.............",
    });
  }
};

export default addCourses;
