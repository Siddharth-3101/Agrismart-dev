import React, { useState } from "react";
import "../sid.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Search,
  Plus,
  Droplets,
  Calendar,
  Sprout,
  Leaf,
} from "lucide-react";

function Crops() {
  const [search, setSearch] = useState("");

  const crops = [
    {
      id: 1,
      name: "Rice",
      soil: "Alluvial",
      water: "Moderate",
      harvest: "18 Sept",
      status: "Healthy",
    },
    {
      id: 2,
      name: "Maize",
      soil: "Black Soil",
      water: "High",
      harvest: "30 Sept",
      status: "Growing",
    },
    {
      id: 3,
      name: "Cotton",
      soil: "Black Soil",
      water: "Low",
      harvest: "12 Oct",
      status: "Attention",
    },
    {
      id: 4,
      name: "Wheat",
      soil: "Loamy",
      water: "Moderate",
      harvest: "28 Oct",
      status: "Healthy",
    },
  ];

  const filteredCrops = crops.filter((crop) =>
    crop.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <section className="cropPage">
        <div className="cropHeader">
          <div>
            <h1>Crop Management</h1>
            <p>
              Monitor crop health, harvest schedules, and farming activities.
            </p>
          </div>

          <button className="addCropBtn">
            <Plus size={18} />
            Add Crop
          </button>
        </div>

        <div className="searchContainer">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search crop..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="summaryCards">
          <div className="summaryCard">
            <h2>2</h2>
            <p>Healthy</p>
          </div>

          <div className="summaryCard">
            <h2>1</h2>
            <p>Growing</p>
          </div>

          <div className="summaryCard">
            <h2>1</h2>
            <p>Attention</p>
          </div>
        </div>

        <div className="cropGrid">
          {filteredCrops.map((crop) => (
            <div className="cropCard" key={crop.id}>
              <div className="cropTop">
                <Leaf size={42} />

                <div>
                  <h2>{crop.name}</h2>

                  <span className={`status ${crop.status.toLowerCase()}`}>
                    {crop.status}
                  </span>
                </div>
              </div>

              <div className="cropInfo">
                <p>
                  <Sprout size={18} />
                  Soil : {crop.soil}
                </p>

                <p>
                  <Droplets size={18} />
                  Water : {crop.water}
                </p>

                <p>
                  <Calendar size={18} />
                  Harvest : {crop.harvest}
                </p>
              </div>

              <div className="cropButtons">
                <button>View Details</button>

                <button>Update</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Crops;