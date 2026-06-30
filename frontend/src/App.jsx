import { Routes, Route } from "react-router-dom";
import "./App.css";

// Existing Pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Crops from "./pages/Crops";
import Schemes from "./pages/Schemes";
import Weather from "./pages/Weather";
import Chatbot from "./pages/Chatbot";
import OfficerPortal from "./pages/OfficerPortal";
import Profile from "./pages/Profile";

// Authentication Pages
import Login from "./pages/Login";
import Register from "./pages/Register";


/* // Role-Based Dashboards
import FarmerDashboard from "./pages/FarmerDashboard";
import OfficerDashboard from "./pages/OfficerDashboard";
import AdminDashboard from "./pages/AdminDashboard"; */

function App() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Existing Pages */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/crops" element={<Crops />} />
      <Route path="/schemes" element={<Schemes />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/officer-portal" element={<OfficerPortal />} />
      <Route path="/profile" element={<Profile />} />

      {/* Role-Based Dashboards */}
     {/*  <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
      <Route path="/officer-dashboard" element={<OfficerDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} /> */}
    </Routes>
  );
}

export default App;