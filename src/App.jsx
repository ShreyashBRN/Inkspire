import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";
import Profile from "./pages/Profile";
import Saved from "./pages/Saved";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div>
      <Sidebar />
      <Navbar />

      {/* Main Content */}
      <div className="ml-60 flex-1 p-6 h-screen pt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
