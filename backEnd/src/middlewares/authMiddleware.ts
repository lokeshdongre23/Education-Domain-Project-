import { NextFunction, Request, Response } from "express";
import authService from "../services/authService";

const authenticateUSerOnly = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userUid = req.cookies?.uid;
  if (!userUid) {
    return res.status(404).json({
      message: "you are not Login, Please Login",
    });
  }
  const user = authService.getUser(userUid);

  if (!user) {
    return res.status(404).json({
      message: "User NOt Found , please Login in again...",
    });
  }

  //   console.log("user data:", user);

  req.user = user; //from here the user object is send to the next router
  next();
};

export default authenticateUSerOnly;
