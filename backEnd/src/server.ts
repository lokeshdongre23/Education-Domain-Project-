import express from "express";
import dotenv from "dotenv";
import dbConnection from "./config/db";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
// this function is use to connect he dataBase 
dbConnection();

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to TypeScript Express Starter!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
