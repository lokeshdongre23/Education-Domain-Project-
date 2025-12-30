import { Router } from "express";
import getStudents from "../controllers/getStudentController";
import addStudent from "../controllers/addStudent";

const studentRouter = Router();

studentRouter.get("/", getStudents);
studentRouter.post("/", addStudent);
export default studentRouter;
