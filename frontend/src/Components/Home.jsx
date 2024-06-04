import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container border shadow">
      <form class="d-flex mx-5 my-5 ">
        <input class="form-control me-2" type="text" placeholder="Search" />
        <button class="btn btn-primary me-4" type="button">
          Search
        </button>
      </form>

      <ul className="list-unstyled">
        <li className="border px-4 py-2">
          <h3>Proof Reader Wanted</h3>
          <p>
            I am publishing a book with many charts, tables, numbers, and
            detailed graphics that need proofreading in search of errors. For
            every mistake you find, I pay a bonus of $5 up to $50. I imagine
            this particular project might only take someone 1-2 hours tops. I am
            attaching 1 of 7 images that need proofreading. I have a Word file
            with the corrections to compare against and am happy to send that to
            the person I hire for this project. I have many subsequent similar
            larger projects as well. I am looking for someone with hawk eyes who
            has a knack for details and a natural proclivity for finding errors.
            Thank you!
          </p>
          <p className="fw-bolder">Budget $25.00</p>
          <div className="row align-items-center my-3">
            <div className="col-12 col-md-6">
              <Link to="/job/apply">
                <button className="btn btn-success w-100">Apply Now</button>
              </Link>
            </div>
            <div className="col-12 col-md-6 text-md-right text-center mt-3 mt-md-0">
              <span className="text-muted">Posted 8 hours ago</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Home;
