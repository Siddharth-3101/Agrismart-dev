import React from 'react';
import "../App.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sprout,
  MapPin,
  AlertTriangle,
  CloudRain,
  Plus,
  Layers,
  Award,
  MessageSquare
} from 'lucide-react';
import FloatingAI from "../components/FloatingAI";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {

  const navigate = useNavigate();

  const [dashboard, setDashboard] = useState({
    stats: {
      totalFarms: 1,
      activeCrops: 1
    },
    advisory: [{
      id: 1,
      type: "no info",
      title: "Official Advisory",
      message: "No warnings"
    }],
    weather: {
      temperature: "28.5°C",
      condition: "Drizzle",
      humidity: "68%",
      lastSync: "9:51 AM",
      rainfall: "10 cm"
    }
  });

  useEffect(() => {

  }, []);

  return (
    <>
      <Navbar />

      {/* Push content below fixed navbar */}
      <div style={{ paddingTop: "120px", minHeight: "100vh" }}>

        <div className="stats-grid">
          <div className="card">
            <MapPin />
            <div>
              <p>Total Farms</p>
              <h2>{dashboard.stats.totalFarms}</h2>
            </div>
          </div>

          <div className="card">
            <Sprout />
            <div>
              <p>Active Crops</p>
              <h2>{dashboard.stats.activeCrops}</h2>
            </div>
          </div>
        </div>

        <div className="warning-card">
          <AlertTriangle />
          <p>Official Advisory & Warnings</p>

          {dashboard.advisory.length === 0 ? (
            <p>No Warnings or Advisory Available</p>
          ) : (
            dashboard.advisory.map((item) => (
              <div key={item.id} className={`advisory ${item.type}`}>
                <h4>{item.title}</h4>
                <h4>{item.message}</h4>
              </div>
            ))
          )}
        </div>

        <div className="weather">
          <div className="weather-header">
            <h2>Current Weather Snapshot</h2>
            <small>Last Sync: {dashboard.weather.lastSync}</small>
          </div>

          <div>
            <CloudRain />
            <h4>Temperature: {dashboard.weather.temperature}</h4>
            <h4>{dashboard.weather.condition}</h4>
            <h4>Humidity: {dashboard.weather.humidity}</h4>
            <h4>Rainfall: {dashboard.weather.rainfall}</h4>
          </div>
        </div>

        <div className="actions">
          <h2>Quick Actions</h2>

          <button onClick={() => navigate("/register-farm")}>
            <Plus /> Register New Farm
          </button>

          <button onClick={() => navigate("/add-crop")}>
            <Layers /> Add New Crop
          </button>

          <button onClick={() => navigate("/schemes")}>
            <Award /> Schemes
          </button>

          <button onClick={() => navigate("/chatbot")}>
            <MessageSquare /> Chat with AI Bot
          </button>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Dashboard;