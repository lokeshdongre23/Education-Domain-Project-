import { Request, Response } from "express";
import userModel from "../models/userModel";

const allUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await userModel.find();

    res.status(200).send(allUsers);
  } catch (e) {
    console.log("error:", e);
    return res.status(400).send("Somthings Goes Wrong");
  }
};

export default allUsers;
