import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/posts", { post: { title, body } })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err.data));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add Post</h2>
          <div className="mb-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              placeholder="input title"
              className="form-control"
              required
              minLength={3}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="body">Body</label>
            <textarea
              type="text"
              name="body"
              placeholder="input body"
              className="form-control"
              required
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
          <Link to={"/"} className="btn btn-warning ms-2">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
