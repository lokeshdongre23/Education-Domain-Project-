import mongoose, { Schema } from "mongoose";
interface Ientrolled extends Document {
  userId: mongoose.Types.ObjectId;
  courseId: mongoose.Types.ObjectId;
  entrolledAt: Date;
}
const entrolledUser = new Schema<Ientrolled>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "users",
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "courses",
  },
  entrolledAt: {
    type: Date,
    default: Date.now,
  },
});

const enrollmentModel = mongoose.model<Ientrolled>(
  "enrollments",
  entrolledUser
);

export default enrollmentModel;
