import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./home.css";
import Form from "./Form";

function Home() {
  const [jobs, setJobs] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prevState) => !prevState);
  };

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
    <div className="container-fluid border shadow">
      <Form />

      <ul className="list-unstyled">
        {jobs.map((job, index) => (
          <li className="border px-4 py-2" key={index}>
            <div className="row">
              <div className="col-11">
                <h3>{job.title}</h3>
              </div>
              <div className="col-1">
                <FavoriteBorderIcon style={{ color: "green" }} />
                {/* {isFavorite ? (
                  <FavoriteBorderIcon
                    style={{ color: "green" }}
                    onClick={toggleFavorite}
                  />
                ) : (
                  <FavoriteBorderIcon
                    style={{ color: "red" }}
                    onClick={toggleFavorite}
                  />
                )} */}
              </div>
            </div>
            <p>{job.description}</p>
            <div className="row">
              <div className="col-4">
                <p className="fw-bolder">Budget ${job.budget}</p>
              </div>
              <div className="col-4">
                <p className="fw-bolder">Location</p> {job.location}
              </div>
              <div className="col-4">
                <p className="fw-bolder">Company</p> {job.company}
              </div>
            </div>

            <div className="row mt-5 mb-3">
              <div className="col-6 ">
                <Link to="/job/apply">
                  <button className="btn btn-success w-100">Apply Now</button>
                </Link>
              </div>
              <div className="col-6  text-md-right text-center mt-3 mt-md-0">
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
