import "./App.css";
import { Routes, Route } from "react-router-dom";

// Farmer Pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Crops from "./pages/Crops";
import AddCrop from "./pages/AddCrop";
import CropDetails from "./pages/CropDetails";
import Profile from "./pages/Profile";
import Chatbot from "./pages/Chatbot";
import Weather from "./pages/Weather";
import Schemes from "./pages/Schemes";
import Login from "./pages/Login";

// Officer Pages
import OfficerPortal from "./pages/OfficerPortal";
import OfficerDashboard from "./pages/OfficerDashboard";

function App() {
  return (
    <Routes>

      {/* ================= HOME ================= */}

      <Route path="/" element={<Home />} />

      {/* ================= FARMER ================= */}

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/crops" element={<Crops />} />

      <Route path="/crops/add" element={<AddCrop />} />

      <Route path="/crops/:id" element={<CropDetails />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="/chatbot" element={<Chatbot />} />

      <Route path="/weather" element={<Weather />} />

      <Route path="/schemes" element={<Schemes />} />

      {/* ================= OFFICER ================= */}

      <Route path="/officer" element={<OfficerPortal />} />

      <Route
        path="/officer/dashboard"
        element={<OfficerDashboard />}
      />

      {/* ================= LOGIN ================= */}

      <Route path="/login" element={<Login />} />

    </Routes>
  );
}

export default App;