import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/posts/${id}`)
      .then((res) => {
        setTitle(res.data.post.title);
        setBody(res.data.post.body);
        console.log(res.data.post);
      })
      .catch((err) => console.log(err.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:4000/api/posts/${id}`, {
        post: { title, body },
      })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err.data));
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Edit Post</h2>
          <div className="mb-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              placeholder="input title"
              className="form-control"
              required
              minLength={3}
              value={title}
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
              value={body}
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

export default EditPost;
