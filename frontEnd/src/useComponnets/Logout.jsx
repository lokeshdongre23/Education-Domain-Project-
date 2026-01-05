import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  //   const { setLogedIn, logedIn } = useContext(AuthContext);
  useEffect(() => {
    localStorage.removeItem("token");
    navigate("/login");
    // console.log(logedIn);
  }, [navigate]);

  return null;
}

export default Logout;
