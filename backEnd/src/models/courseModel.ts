import mongoose, { Document, Schema } from "mongoose";

interface Icourse extends Document {
  title: String;
  description: String;
  teacher: string;
  price: Number;
}

const courseSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export const courseModel = mongoose.model<Icourse>("courses", courseSchema);
