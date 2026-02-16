import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Createpost from "./pages/Createpost";
import PostDetails from "./pages/PostDetails";
import Analytics from "./pages/Analytics";
import Editpost from "./pages/Editpost"; // ✅ ADD THIS

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-post" element={<Createpost />} />
        <Route path="/post-detail/:id" element={<PostDetails />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/edit-post/:id" element={<Editpost />} />
      </Routes>

      <ToastContainer position="top-right" autoClose={1000} theme="light" />
    </>
  );
}

export default App;
  