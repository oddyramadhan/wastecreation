import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Explore from "./pages/explore";
import Blog from "./pages/blog";
import BlogDetail from "./pages/blogdetail";
import Video from "./pages/video";
import Upload from "./pages/upload";
import UploadBlog from "./components/upload-blog";
import UploadVideo from "./components/upload-video";
import Profile from "./pages/profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explore/blog" element={<Blog />} />
          <Route path="/explore/video" element={<Video />} />
          <Route path="/explore/blog/detail" element={<BlogDetail />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/upload/blog" element={<UploadBlog />} />
          <Route path="/upload/video" element={<UploadVideo />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
