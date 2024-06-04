import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    try {
      const res = await api.get("/api/jobs/");
      console.log(res.data);
      setJobs(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container border shadow">
      <form className="d-flex mx-5 my-5 ">
        <input className="form-control me-2" type="text" placeholder="Search" />
        <button className="btn btn-primary me-4" type="button">
          Search
        </button>
      </form>

      <ul className="list-unstyled">
        {jobs.map((job, index) => (
          <li className="border px-4 py-2" key={index}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p className="fw-bolder">Budget ${job.budget}</p>
            <div className="row align-items-center my-3">
              <div className="col-12 col-md-6">
                <Link to="/job/apply">
                  <button className="btn btn-success w-100">Apply Now</button>
                </Link>
              </div>
              <div className="col-12 col-md-6 text-md-right text-center mt-3 mt-md-0">
                <span className="text-muted">Posted {job.date_created}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
