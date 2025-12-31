import mongoose, { Document, Schema } from "mongoose";
interface Iuser extends Document {
  uName: String;
  email: String;
  cNo: Number;
  profession?: string;
  password: String;
}

const userSchema = new Schema<Iuser>({
  uName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  cNo: {
    type: Number,
    required: true,
    unique: true,
  },
  profession: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model<Iuser>("user", userSchema);

export default userModel;
