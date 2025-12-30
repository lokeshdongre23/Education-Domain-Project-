import express from "express";
import dotenv from "dotenv";
import dbConnection from "./config/db";
import router from "./routes/studentRouter";
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

app.use("/students", router); //getStudent Router

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
