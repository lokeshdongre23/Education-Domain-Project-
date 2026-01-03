import { Router } from "express";
import userSignup from "../controllers/userSignup";

const signupRouter = Router();

signupRouter.post("/", userSignup);

export default signupRouter;
