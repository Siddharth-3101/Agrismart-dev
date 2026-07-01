import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/farm.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingAI from "../components/FloatingAI";
import LeafletMap from "../components/LeafletMap";
import {

  FaArrowLeft,
  FaMapMarkedAlt,
  FaSeedling,
  FaTint,
  FaFileUpload,
  FaSave

} from "react-icons/fa";

function AddFarm() {

  const navigate = useNavigate();

  const [farm, setFarm] = useState({

    farmName: "",
    village: "",
    district: "",
    state: "",
    area: "",
    unit: "Acres",
    soil: "",
    ownership: "",
    waterSource: "",
    irrigation: "",
    crop: "",
    season: "",
    plantingDate: ""

  });

  const [location, setLocation] = useState({

    coordinates: [],

    geoJson: null,

    area: 0,

    acres: 0,

    hectares: 0

  });

  const handleChange = (e) => {

    setFarm({

      ...farm,

      [e.target.name]: e.target.value

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log({

      ...farm,

      ...location

    });

    alert("Farm Registered Successfully");

    navigate("/farm-management");

  };

  return (

    <>

      <Navbar />

      <FloatingAI />

      <div className="addFarmPage">

        <div className="addFarmContainer">

          <button

            className="backButton"

            onClick={() => navigate("/farm-management")}

          >

            <FaArrowLeft />

            Back to Farms

          </button>

          <div className="pageHeader">

            <h1>

              Register New Farm

            </h1>

            <p>

              Add a new agricultural land to your AgriSmart account.

            </p>

          </div>

          <form onSubmit={handleSubmit}>

            {/* =======================================
                        BASIC INFORMATION
                    ======================================== */}

            <div className="formSection">

              <h2>

                Farm Boundary

              </h2>

              <p>

                Click on the map to create your farm boundary.

                Use at least three points to form a polygon.

              </p>

              <LeafletMap

                onPolygonChange={setLocation}

              />

              {

                location?.geoJson && (

                  <div className="polygonSummary">

                    <div className="summaryBox">

                      <span>

                        Area

                      </span>

                      <h3>

                        {location.acres} Acres

                      </h3>

                    </div>

                    <div className="summaryBox">

                      <span>

                        Hectares

                      </span>

                      <h3>

                        {location.hectares}

                      </h3>

                    </div>

                    <div className="summaryBox">

                      <span>

                        Boundary Points

                      </span>

                      <h3>

                        {location.coordinates.length}

                      </h3>

                    </div>

                  </div>

                )

              }

            </div>

            {/* =======================================
                        LAND DETAILS
                    ======================================== */}

            <div className="formSection">

              <h2>

                Land Details

              </h2>

              <div className="formGrid">

                <div className="formGroup">

                  <label>

                    Land Area

                  </label>

                  <input

                    type="number"

                    name="area"

                    value={farm.area}

                    onChange={handleChange}

                  />

                </div>

                <div className="formGroup">

                  <label>

                    Unit

                  </label>

                  <select

                    name="unit"

                    value={farm.unit}

                    onChange={handleChange}

                  >

                    <option>Acres</option>

                    <option>Hectares</option>

                  </select>

                </div>

                <div className="formGroup">

                  <label>

                    Soil Type

                  </label>

                  <select

                    name="soil"

                    value={farm.soil}

                    onChange={handleChange}

                  >

                    <option value="">Select</option>

                    <option>Black Soil</option>

                    <option>Red Soil</option>

                    <option>Alluvial Soil</option>

                    <option>Laterite Soil</option>

                    <option>Sandy Soil</option>

                  </select>

                </div>

                <div className="formGroup">

                  <label>

                    Ownership

                  </label>

                  <select

                    name="ownership"

                    value={farm.ownership}

                    onChange={handleChange}

                  >

                    <option value="">Select</option>

                    <option>Owned</option>

                    <option>Leased</option>

                    <option>Shared</option>

                  </select>

                </div>

              </div>

            </div>

            {/* =======================================
                        FARM LOCATION
                    ======================================== */}

            <div className="formSection">

              <h2>

                <FaMapMarkedAlt />

                Farm Location

              </h2>

              <p>

                Click anywhere on the map to select your farm.

              </p>

              <div className="farmMap">

                <LeafletMap

                  setLocation={setLocation}

                />

              </div>

              <div className="formGrid">

                <div className="formGroup">

                  <label>

                    Latitude

                  </label>

                  <input

                    type="text"

                    value={location.latitude}

                    readOnly

                  />

                </div>

                <div className="formGroup">

                  <label>

                    Longitude

                  </label>

                  <input

                    type="text"

                    value={location.longitude}

                    readOnly

                  />

                </div>

              </div>

            </div>
            {/* =======================================
                        WATER & IRRIGATION
                    ======================================== */}

            <div className="formSection">

              <h2>

                <FaTint />

                Water & Irrigation

              </h2>

              <div className="formGrid">

                <div className="formGroup">

                  <label>

                    Water Source

                  </label>

                  <select

                    name="waterSource"

                    value={farm.waterSource}

                    onChange={handleChange}

                  >

                    <option value="">Select Water Source</option>

                    <option>Borewell</option>

                    <option>Canal</option>

                    <option>River</option>

                    <option>Rain Water</option>

                    <option>Lake</option>

                    <option>Pond</option>

                  </select>

                </div>

                <div className="formGroup">

                  <label>

                    Irrigation Method

                  </label>

                  <select

                    name="irrigation"

                    value={farm.irrigation}

                    onChange={handleChange}

                  >

                    <option value="">Select Irrigation</option>

                    <option>Drip Irrigation</option>

                    <option>Sprinkler Irrigation</option>

                    <option>Flood Irrigation</option>

                    <option>Manual Irrigation</option>

                  </select>

                </div>

              </div>

            </div>

            {/* =======================================
                        CURRENT CROP
                    ======================================== */}

            <div className="formSection">

              <h2>

                <FaSeedling />

                Current Crop

              </h2>

              <div className="formGrid">

                <div className="formGroup">

                  <label>

                    Crop Name

                  </label>

                  <input

                    type="text"

                    name="crop"

                    value={farm.crop}

                    onChange={handleChange}

                    placeholder="Rice"

                  />

                </div>

                <div className="formGroup">

                  <label>

                    Season

                  </label>

                  <select

                    name="season"

                    value={farm.season}

                    onChange={handleChange}

                  >

                    <option value="">Select Season</option>

                    <option>Kharif</option>

                    <option>Rabi</option>

                    <option>Zaid</option>

                  </select>

                </div>

                <div className="formGroup">

                  <label>

                    Planting Date

                  </label>

                  <input

                    type="date"

                    name="plantingDate"

                    value={farm.plantingDate}

                    onChange={handleChange}

                  />

                </div>

              </div>

            </div>

            {/* =======================================
                        DOCUMENTS
                    ======================================== */}

            <div className="formSection">

              <h2>

                <FaFileUpload />

                Upload Documents

              </h2>

              <div className="formGrid">

                <div className="formGroup">

                  <label>

                    Land Ownership Certificate

                  </label>

                  <input type="file" />

                </div>

                <div className="formGroup">

                  <label>

                    Soil Health Card

                  </label>

                  <input type="file" />

                </div>

                <div className="formGroup">

                  <label>

                    Farm Photograph

                  </label>

                  <input type="file" />

                </div>

              </div>

            </div>

            {/* =======================================
                        BUTTONS
                    ======================================== */}

            <div className="formButtons">

              <button

                type="button"

                className="cancelBtn"

                onClick={() => navigate("/farm-management")}

              >

                Cancel

              </button>

              <button

                type="submit"

                className="saveFarmBtn"

              >

                <FaSave />

                Save Farm

              </button>

            </div>

          </form>

        </div>

      </div>

      <Footer />

    </>

  );

}

export default AddFarm;