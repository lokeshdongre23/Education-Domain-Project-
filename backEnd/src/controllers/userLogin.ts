/*
This controller is use to login the user
*/
import { Request, Response } from "express";
import userModel from "../models/userModel";
// import { v4 as uuidv4 } from "uuid";
import authService from "../services/authService";

const userLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    // console.log("user from controller", user);

    if (!user) {
      return res.send("no user Found......");
    }
    // const sessionId = uuidv4(); // heere we are creatin the session id
    const token = authService.setUser(user); // here we are going to store the uuid inside the map()
    console.log(token);
    // res.cookie("uid", sessionId);
    // res.cookie("uid", token);
    res.header({ token }); //sending token to the header

    console.log(`${user.uName} has being loggedIN`);
    // return res.send("you are logged in");
    return res.json({
      message: `${user.uName} welcome`,
      cookie: `${token}`,
    });
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
