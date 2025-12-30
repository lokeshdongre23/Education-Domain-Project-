import { Router } from "express";
import getStudents from "../controllers/getStudentController";
import addStudent from "../controllers/addStudent";

const router = Router();

router.get("/", getStudents);
router.post("/", addStudent);
export default router;
