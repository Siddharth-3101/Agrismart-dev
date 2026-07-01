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
import Farms from "./pages/Farms";
import AddFarm from "./pages/AddFarm";
import FarmDetails from "./pages/FarmDetails";
// Authentication Pages
import Login from "./pages/Login";
import Register from "./pages/Register";

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

      <Route path="/farm-management" element={<Farms />} />

      <Route path="/farm-management/add" element={<AddFarm />}/>

      <Route path="/farm-management/:id" element={<FarmDetails />}/>

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

      {/* ================= AUTHENTICATION ================= */}

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

    </Routes>
  );
}

export default App;