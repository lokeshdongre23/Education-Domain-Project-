import axios from "axios";

const URI = import.meta.env.VITE_BASE_URI;
const connection = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: URI,
});

// Automatically attach token
connection.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getCourses = async () => {
  return await connection.get("/courses");
};
export const getStudents = async () => {
  return await connection.get("/students");
};
export const setStudent = async (formData) => {
  return await connection.post("/students", formData);
};

export const userLogin = async (credential) => {
  return await connection.post("/login", credential);
};

export const signUp = async (userInfo) => {
  return await connection.post("/signup", userInfo);
};
