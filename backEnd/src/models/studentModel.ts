import mongoose, { Document, Schema } from "mongoose";
interface Istudent extends Document {
  sName: String;
  grade: Number;
}

const studentSchema: Schema = new Schema({
  sName: {
    type: String,
    required: true,
  },
  grade: {
    type: Number,
    required: true,
  },
});

const studentModel = mongoose.model<Istudent>("students", studentSchema);

export default studentModel;
