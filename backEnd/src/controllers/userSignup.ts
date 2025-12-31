/*
This controller help us to create the users 
This is the user sign in controlleer
*/

import { Request, Response } from "express";
import userModel from "../models/userModel";

const userSignup = async (req: Request, res: Response) => {
  try {
    const { uName, email, cNo, profession, password } = req.body;
    const addUser = new userModel({
      uName,
      email,
      cNo,
      profession,
      password,
    });

    const userAdded = await addUser.save();
    console.log("user Created.....");
    return res.json(userAdded);
  } catch (error) {
    console.log("Error", error);
    res.status(404).json("Somthing goes wrong............");
  }
};

export default userSignup;
