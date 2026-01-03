import mongoose, { Document, Schema, Types } from "mongoose";

interface Istudent extends Document {
  sName: String;
  grade: Number;
  createdBy: Types.ObjectId;
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
  creteatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});

const studentModel = mongoose.model<Istudent>("students", studentSchema);

export default studentModel;

// const student = new studentModel({
//   sName: "lokesh",
//   grade: 10,
// });

// student.save();
