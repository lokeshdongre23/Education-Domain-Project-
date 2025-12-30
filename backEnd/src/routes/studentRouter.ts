import { Router } from "express";
import getStudents from "../controllers/getStudentController";

const router = Router();

router.get("/", getStudents);

export default router;
