import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark  ">
        <div className="container-fluid ">
          <Link className="navbar-brand fw-bolder text-white" to="/">
            Mega-Jobs
          </Link>

          <button
            type="button"
            className="navbar-toggler "
            data-bs-target="#collapsibleNavbar"
            data-bs-toggle="collapse"
          >
            <span className="navbar-toggler-icon bg-light"></span>
          </button>

          {/* target */}
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link fw-bolder text-white" to="/register">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bolder text-white" to="/login">
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bolder text-white" to="/jobs">
                  Jobs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
