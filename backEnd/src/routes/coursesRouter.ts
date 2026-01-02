import { Router } from "express";
import getCourses from "../controllers/getCoursesController";
import addCourses from "../controllers/addCours";
import { authenticateUSerOnly } from "../middlewares/authMiddleware";

const courseRouter = Router();

export const viewCourse = courseRouter.get("/", getCourses);
export const addCourse = courseRouter.post(
  "/add",
  authenticateUSerOnly,
  addCourses
);

// export default courseRouter;
