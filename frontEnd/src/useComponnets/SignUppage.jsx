import React, { useState } from "react";
import { signUp } from "../services/services";
import Swal from "sweetalert2";

function SignUppage() {
  const [info, setInfo] = useState({
    uName: "",
    email: "",
    cNo: "",
    profession: "",
    password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInfo((pre) => ({
      ...pre,
      [name]: value,
    }));
  };
  // console.log(info);

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      await signUp(info); // signup api hit
      console.log("submitted");
      Swal.fire({
        title: "Registration Successful",
        icon: "success",
        imageUrl:
          "https://atlassianblog.wpengine.com/wp-content/uploads/2025/06/popular-gif.gif",
        imageWidth: 325,
        imageHeight: 230,
        imageAlt: "Success image",
        draggable: true,
      });

      // console.log(info);
      setInfo({
        uName: "",
        email: "",
        cNo: "",
        profession: "",
        password: "",
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <section className="vh-100 m-3" style={{ backgroundColor: "#fefeffff" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={handlesubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div
                            data-mdb-input-init
                            className="form-outline flex-fill mb-0"
                          >
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Your Name
                            </label>
                            <input
                              name="uName"
                              value={info.uName}
                              onChange={onChange}
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div
                            data-mdb-input-init
                            className="form-outline flex-fill mb-0"
                          >
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Email
                            </label>
                            <input
                              name="email"
                              value={info.email}
                              onChange={onChange}
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div
                            data-mdb-input-init
                            className="form-outline flex-fill mb-0"
                          >
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Contact Number
                            </label>
                            <input
                              name="cNo"
                              value={info.cNo}
                              onChange={onChange}
                              type="number"
                              id="form3Example4c"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div
                            data-mdb-input-init
                            className="form-outline flex-fill mb-0"
                          >
                            <label
                              className="form-label"
                              htmlFor="form3Example6c"
                            >
                              Profession
                            </label>
                            <input
                              name="profession"
                              value={info.profession}
                              onChange={onChange}
                              type="text"
                              id="form3Example6c"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div
                            data-mdb-input-init
                            className="form-outline flex-fill mb-0"
                          >
                            <label
                              className="form-label"
                              htmlFor="form3Example7c"
                            >
                              Password
                            </label>
                            <input
                              name="password"
                              value={info.password}
                              onChange={onChange}
                              type="password"
                              id="form3Example7c"
                              className="form-control"
                            />
                          </div>
                        </div>

                        {/* <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div> */}

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://i.pinimg.com/originals/76/ff/c5/76ffc5fb70db2ccf794d84a714147b93.gif"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUppage;
