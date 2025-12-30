import { Router } from "express";
import getCourses from "../controllers/getCoursesController";

const courseRouter = Router();

courseRouter.get("/", getCourses);

export default courseRouter;
