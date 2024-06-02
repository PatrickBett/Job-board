import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="container">
        <h3 className="text-center">Sign Up</h3>
        <form className="shadow rounded mt-2 px-5 py-4">
          <div className="mb-1">
            <label htmlFor="firstname" className="form-label">
              Enter First Name
            </label>
            <input type="text" className="form-control" />
          </div>

          <div className="mb-1">
            <label htmlFor="lastname" className="form-label">
              Enter Last Name
            </label>
            <input type="text" className="form-control" />
          </div>

          <div className="mb-1">
            <label htmlFor="username" className="form-label">
              Enter Username
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-1">
            <label htmlFor="email" className="form-label">
              Enter Email
            </label>
            <input type="email" className="form-control" />
          </div>

          <div className="mb-1">
            <label htmlFor="password" className="form-label">
              Enter Password
            </label>
            <input type="password" className="form-control" />
          </div>
          <button className="btn btn-primary">SignUp</button>
        </form>
        <a>
          Already have an account? <Link to="/login">Sign in Here</Link>
        </a>
      </div>
    </>
  );
}

export default Register;
