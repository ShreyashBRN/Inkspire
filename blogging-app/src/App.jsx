import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";
import Profile from "./pages/Profile";
import Saved from "./pages/Saved";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute.jsx";



function App() {
  const location = useLocation(); // Get current route
  const hideLayout = location.pathname === "/login" || location.pathname === "/signup"; // Hide layout for login page


  return (
    <div>
      {/* Conditionally render Sidebar & Navbar */}
      {!hideLayout && <Sidebar />}
      {!hideLayout && <Navbar />}

      {/* Main Content */}
      <div className={`p-6 h-screen pt-4 ${!hideLayout ? "ml-60" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route element={<ProtectedRoute />}>
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/saved" element={<Saved />} />
          </Route>
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </div>
    </div>
  );
}
// function App() {
//   return (
//     <div>
//       <Sidebar />
//       <Navbar />

//       {/* Main Content */}
//       <div className="ml-60 flex-1 p-6 h-screen pt-4">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/create" element={<CreateBlog />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/blogs/:id" element={<Blogs />} />
//           <Route path="/saved" element={<Saved />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="*" element={<NotFound />} />
          
//         </Routes>
//       </div>
//     </div>
//   );
// }

export default App;
