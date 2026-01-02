import { Router } from "express";
import getCourses from "../controllers/getCoursesController";
import addCourses from "../controllers/addCours";
import {
  authenticateUSerOnly,
  restrictedToRole,
} from "../middlewares/authMiddleware";

const courseRouter = Router();

export const viewCourse = courseRouter.get("/", getCourses); /// Every one Can See the courses
export const addCourse = courseRouter.post(
  "/add",
  authenticateUSerOnly,
  restrictedToRole(["ADMIN"]), //this middleare restrict the  unatuthorided user too add courses
  addCourses
); /// only the ADmin have acces to add courses

// export default courseRouter;
