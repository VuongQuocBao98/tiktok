import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./Pages/AboutPage";
import BlogPage from "./Pages/BlogPage";
import HomePage from "./Pages/HomePage";
import PostPage from "./Pages/PostPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/my-blog" element={<BlogPage />} />
      <Route exact path="/about" element={<AboutPage />} />
      <Route exact path="/posts/:postid" element={<PostPage />} />
    </Routes>
  );
}

export default App;
