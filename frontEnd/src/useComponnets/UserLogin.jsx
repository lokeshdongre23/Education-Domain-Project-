import React, { useState } from "react";
import { userLogin } from "../services/services";
import Swal from "sweetalert2";
import { redirect, useNavigate } from "react-router-dom";

function UserLogin() {
  const navigate = useNavigate();
  const [credential, setCredentail] = useState({
    email: "",
    password: "",
  });

  const handleClick = (e) => {
    const { name, value } = e.target;
    setCredentail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // console.log(credential);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await userLogin(credential);
      // localStorage.setItem("token", res.data.cookie); // storing the token inside the local storage of the browser
      // console.log(store);

      console.log(res.data);
      // console.log("submitted");
      await Swal.fire({
        title: `Welcome ${res.data.message}`,
        icon: "success",
      });
      setCredentail({
        email: "",
        password: "",
      });

      navigate("/add-student");
    } catch (error) {
      Swal.fire({
        title: error.response.data.message,
        icon: "error",
      });
      console.log(error.response.data.message);

      console.log("Error: ", error);
    }
  };

  return (
    <>
      <div>
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex align-items-center justify-content-center h-100">
              <div className="col-md-8 col-lg-7 col-xl-6">
                <img
                  src="https://wallpapers-clan.com/wp-content/uploads/2022/11/meme-gif-pfp-19.gif"
                  className="img-fluid"
                  alt="Phone image"
                />
              </div>
              <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <form onSubmit={handleSubmit}>
                  {/* <!-- Email input --> */}
                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="form1Example13">
                      Email address
                    </label>
                    <input
                      name="email"
                      value={credential.email}
                      onChange={handleClick}
                      type="email"
                      id="form1Example13"
                      className="form-control form-control-lg"
                    />
                  </div>

                  {/* <!-- Password input --> */}
                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="form1Example23">
                      Password
                    </label>
                    <input
                      name="password"
                      value={credential.password}
                      onChange={handleClick}
                      type="password"
                      id="form1Example23"
                      className="form-control form-control-lg"
                    />
                  </div>

                  {/* <!-- Submit button --> */}
                  <button
                    type="submit"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default UserLogin;
