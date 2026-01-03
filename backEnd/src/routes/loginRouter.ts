import { Router } from "express";
import userLogin from "../controllers/userLogin";

const loginRouter = Router();

loginRouter.post("/", userLogin);

export default loginRouter;
