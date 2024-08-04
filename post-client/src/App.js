import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import CreatePost from "./components/CreatePost";
import ReadPost from "./components/ReadPost";
import EditPost from "./components/EditPost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Post></Post>}></Route>
          <Route path="/create" element={<CreatePost></CreatePost>}></Route>
          <Route path="/read/:id" element={<ReadPost></ReadPost>}></Route>
          <Route path="/edit/:id" element={<EditPost></EditPost>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
