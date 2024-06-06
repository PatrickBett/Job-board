import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import "./community.css";
function Post({ posts }) {
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li className="border my-2" key={post.id}>
            <div className="row">
              <div className="col-4">
                <button className="border rounded-circle m-2">
                  <PersonIcon />
                </button>
                <span className="fw-bolder">{post.user.username}</span>
              </div>
              <div className="col-2 d-flex justify-content-end align-items-center ms-auto">
                <button className="btn  me-3 ">
                  <EditIcon />
                </button>
                <button className="btn ">
                  <DeleteIcon />
                </button>
              </div>
            </div>
            <div className="container">
              <p>{post.content}</p>
            </div>
            <div className="row">
              <div className="col-10">
                <button className="btn border-0 me-1">
                  <FavoriteBorderIcon className="me-2" />
                  <span>Likes</span>
                </button>
                <button className="btn border-0 me-1">
                  <CommentIcon className="me-2" />
                  <span>Comments</span>
                </button>
                <button className="btn border-0 ">
                  <ShareIcon className="me-2" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Post;
