import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <h3 className="text-center">Sign In</h3>
      <form className="shadow rounded mt-2 px-5 py-4">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Enter Username
          </label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Enter Password
          </label>
          <input type="password" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
      <div>
        <a>
          Don't have an Account yet? <Link to="/register">Sign up Here</Link>
        </a>
      </div>
    </div>
  );
}

export default Login;
