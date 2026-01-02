import { NextFunction, Request, Response } from "express";
import authService from "../services/authService";
import { IUser } from "../types/express";
import { JwtPayload } from "jsonwebtoken";

export const authenticateUSerOnly = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // const userUid = req.cookies?.uid;
  const userUid = req.headers["authorization"];
  const token = userUid?.split("Bearer ")[1]; // this will get the jwt secrate from the header afere bearer part the only jwt tooken
  // console.log(token);
  if (!userUid) {
    return res.status(404).json({
      message: "you are not Login, Please Login",
    });
  }
  const user = authService.getUser(token) as IUser;

  if (!user) {
    return res.status(404).json({
      message: "User NOt Found , please Login in again...",
    });
  }

  // console.log("user data:", user);

  req.user = user as IUser; //from here the user object is send to the next router
  next();
};

// this will checl the authorization of the user
export const restrictedToRole = (roles: Array<string>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user?.role;

    // console.log(roles);

    console.log(user);

    if (!user) {
      return res.status(404).send("Please Login..");
    }
    if (!roles.includes(user)) {
      return res
        .status(401)
        .send("unAuthorized User , only admin can add Course.......");
    }
    return next();
  };
};

// export default { authenticateUSerOnly, restrictedToRole };
