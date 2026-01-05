import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext(null);

export const AuthProvide = ({ children }) => {
  const [claims, setClaims] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setClaims(jwtDecode(token));
    }
  }, []);
  const logout = () => {
    localStorage.removeItem("token");
    setClaims(null);
  };
  const login = (token) => {
    localStorage.setItem("token", token);
    setClaims(jwtDecode(token));
  };
  return (
    <AuthContext.Provider value={{ claims, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be inside AuthPrvider");
  }
  return ctx;
};

// export default AuthProvide;
