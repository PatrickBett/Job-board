import React from "react";

function Commentinput() {
  return (
    <form>
      <label htmlFor="comment">Comment</label>
      <textarea rows="4" className="form-control"></textarea>
      <button className="btn btn-secondary">Cancel</button>
      <button className="btn btn-primary">Comment</button>
    </form>
  );
}

export default Commentinput;
