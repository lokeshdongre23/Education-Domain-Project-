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

    res.status(200).json({
      message: "All Courses are below",
      Courses: allCourses.map((course) => ({
        title: course.title,
        description: course.description,
        teacher: course.teacher,
        price: course.price,
      })),
    });
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({
      message: "Something went wrong while fetching courses.",
    });
  }
};

export default getCourses;
