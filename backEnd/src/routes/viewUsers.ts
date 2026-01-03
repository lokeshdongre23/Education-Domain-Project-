import { Router } from "express";
import { restrictedToRole } from "../middlewares/authMiddleware";
import allUsers from "../controllers/allUsers";

const getUsersRouter = Router();

getUsersRouter.get("/allusers", restrictedToRole(["ADMIN"]), allUsers);

export default getUsersRouter;
