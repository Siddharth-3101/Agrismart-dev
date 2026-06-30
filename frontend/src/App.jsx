import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Crops from "./pages/Crops";
import Schemes from "./pages/Schemes";
import Weather from "./pages/Weather";
import Chatbot from "./pages/Chatbot";
import OfficerPortal from "./pages/OfficerPortal";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/crops" element={<Crops />} />

      <Route path="/schemes" element={<Schemes />} />

      <Route path="/weather" element={<Weather />} />

      <Route path="/chatbot" element={<Chatbot />} />

      <Route path="/officer-portal" element={<OfficerPortal />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;