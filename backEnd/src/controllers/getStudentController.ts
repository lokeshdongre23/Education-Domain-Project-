import { Request, Response } from "express";
import studentModel from "../models/studentModel";

const getStudents = async (req: Request, res: Response) => {
  const allStudents = await studentModel.find({
    creteatedBy: req.user._id,
  });
  if (allStudents.length === 0) {
    res.status(404).json({
      message: "NO student Found",
    });
  }
  res.status(200).json({
    response: res.send(allStudents),
  });
};
export default getStudents;
