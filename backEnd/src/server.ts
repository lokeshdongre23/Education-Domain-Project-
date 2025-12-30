import express from "express";
import dotenv from "dotenv";
import dbConnection from "./config/db";
import studentRouter from "./routes/studentRouter";
import courseRouter from "./routes/coursesRouter";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
dbConnection();
app.use(express.json());
// this function is use to connect he dataBase

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to TypeScript Express Starter!");
});

app.use("/students", studentRouter); //getStudent Router
app.use("/students", studentRouter); //add student
app.use("/courses", courseRouter); //get  course

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
