/**
 * req.user - The user object attached by your authMiddleware
 *  after verifying the login cookie.
 */

import { Document } from "mongoose";

interface IUser extends Document {
  _id: string;
  uName: string;
  email: string;
  cNo: number;
  profession?: string;
  password: string;
}

declare global {
  namespace Express {
    interface Request {
      user: IUser;
    }
  }
}

export { IUser };
