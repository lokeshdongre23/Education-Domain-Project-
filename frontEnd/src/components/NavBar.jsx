import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useContext } from "react";
import { useAuth } from "../context/AuthContext";
// import { AuthContext } from "../context/AuthContext";

function NavBar() {
  // const { logedIn } = useContext(AuthContext);
  const { claims } = useAuth();
  // console.log(claims);

  const isAdmin = claims?.role === "ADMIN";
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          Education Domain Project
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/add-student"
              >
                Add Students
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/students"
              >
                Students
              </NavLink>
            </li>

            {/* <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/signUp"
              >
                Sign up
              </NavLink>
            </li> */}
            {!claims?.email && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signUp">
                    Sign Up
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
              </>
            )}

            {/* <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/logout"
              >
                Logout
              </NavLink>
            </li> */}
            {claims && (
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/logout"
                >
                  Logout
                  {/* </button> */}
                </NavLink>
              </li>
            )}

            {isAdmin && (
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/allusers"
                >
                  All Users
                  {/* </button> */}
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
