import { Request, Response } from "express";
import { courseModel } from "../models/courseModel";

const getCourses = async (req: Request, res: Response) => {
  try {
    const allCourses = await courseModel.find({});
    if (allCourses.length === 0) {
      return res.status(404).json({
        message: "no Course Found..",
      });
    }

    return res.send(allCourses);
    //  use mapp to send respond here
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({
      message: "Something went wrong while fetching courses.",
    });
  }
};

export default getCourses;
