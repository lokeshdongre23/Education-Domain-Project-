import axios from "axios";

const connection = axios.create({
  baseURL: "http://localhost:5000",
});

export const getCourses = async () => {
  return await connection.get("/courses");
};
