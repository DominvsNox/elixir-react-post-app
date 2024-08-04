import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Post() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/posts")
      .then((res) => {
        setPosts(res.data.posts);
        console.log(res.data.posts);
      })
      .catch((err) => console.log(err.data));
  }, []);

  const handleDelete = (id) => {
    try {
      axios.delete(`http://localhost:4000/api/posts/${id}`).then((res) => {
        window.location.reload();
      });
    } catch (err) {
      console.log(err.data);
    }
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to={"/create"} className="btn btn-success">
          Add Post
        </Link>
        <div className="table-responsive overflow-hidden">
          <table className="table">
            <thead>
              <tr>
                <th>Post ID</th>
                <th>Title</th>
                <th>Body</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, i) => (
                <tr key={i}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  <td>
                    <Link to={`/read/${post.id}`} className="btn btn-primary">
                      Read
                    </Link>
                    <Link
                      to={`/edit/${post.id}`}
                      className="btn btn-warning ms-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={(e) => handleDelete(post.id)}
                      className="btn btn-danger ms-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Post;
