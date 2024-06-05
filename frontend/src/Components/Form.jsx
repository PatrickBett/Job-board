import React from "react";

function Form() {
  return (
    <form className="d-flex mx-5 my-5 ">
      <input className="form-control me-2" type="text" placeholder="Search" />
      <button className="btn btn-primary me-4" type="button">
        Search
      </button>
    </form>
  );
}

export default Form;
