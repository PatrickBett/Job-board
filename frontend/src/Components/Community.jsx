import React from "react";
import "./community.css";
import Form from "./Form";

function Community() {
  return (
    <div className="container-fluid border">
      <div className="row">
        <div className="col-9">
          <Form />
        </div>
        <div className="col-2">
          <button
            className="
          btn btn-success my-5 "
            data-bs-target="#mymodal"
            data-bs-toggle="modal"
          >
            Add post
          </button>
        </div>
      </div>

      <div id="mymodal" className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Add Post</h2>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <label className="form-label">Content: </label>
                <input type="text" className="form-control" />
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary">Save</button>
              <button className="btn btn-danger" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
