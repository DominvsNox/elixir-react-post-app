import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function ReadPost() {
  const { id } = useParams();
  const [post, setPost] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/posts/${id}`)
      .then((res) => {
        setPost(res.data.post);
      })
      .catch((err) => console.log(err.data));
  }, []);

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h2>Read Post</h2>
        <div className="mb-2">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            readOnly
            value={post.title}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="body">Body</label>
          <textarea
            type="text"
            name="body"
            className="form-control"
            readOnly
            value={post.body}
          />
        </div>
        <Link to={"/"} className="btn btn-warning ms-2">
          Back
        </Link>
      </div>
    </div>
  );
}

export default ReadPost;
