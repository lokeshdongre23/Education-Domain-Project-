/*
This controller is use to login the user
*/
import { Request, Response } from "express";
import userModel from "../models/userModel";

const userLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });

    if (!user) {
      return res.send("no user Found......");
    }

    return res.send("you are logged in");
  } catch (error) {
    console.log("Error: ", error);
    res.status(404).json({
      message: "Sonthing Goes Wrong",
    });
  }
};

export default userLogin;

/**
 *
 * getUser(id){
 * sessionidusermap.get(id)
 * }
 */
