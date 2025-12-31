import express from "express";
import dotenv from "dotenv";
import dbConnection from "./config/db";
import studentRouter from "./routes/studentRouter";
import courseRouter from "./routes/coursesRouter";
import cors from "cors";
import signupRouter from "./routes/signupRouter";
import loginRouter from "./routes/loginRouter";
import cookieParser from "cookie-parser";
import authenticateUSerOnly from "./middlewares/authMiddleware";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
dbConnection();
app.use(express.json());
app.use(cookieParser());
// this function is use to connect he dataBase

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to TypeScript Express Starter!");
});

app.use("/students", authenticateUSerOnly, studentRouter); //add student and get students
app.use("/courses", courseRouter); //get  course
app.use("/signup", signupRouter); // router is help to sign in user
app.use("/login", loginRouter); // this is use to login user with email and pass word
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
