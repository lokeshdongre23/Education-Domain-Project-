import { Router } from "express";
import getCourses from "../controllers/getCoursesController";
import addCourses from "../controllers/addCours";

const courseRouter = Router();

courseRouter.get("/", getCourses);
courseRouter.post("/add", addCourses);

export default courseRouter;
