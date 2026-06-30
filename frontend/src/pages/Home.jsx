import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/sankari.css";
import heroImage from "../assets/hero.png";
import farmBg from "../assets/farmbg.png";
import { FaLeaf, FaHome, FaTachometerAlt, FaSeedling, FaCloudSun, FaUserCircle, FaSignInAlt, FaRobot, FaBullhorn } from "react-icons/fa";
import { GiPlantRoots, GiFarmer } from "react-icons/gi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight - 80; // Hero section height

      if (window.scrollY >= heroHeight) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar transparent />

      {/* ================= HERO ================= */}

      <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>

        <div className="overlay">
          <div className="heroContent">
            <h1>Smart Agriculture for a Smarter Future</h1>
            <p>
              Empowering farmers with AI, Weather Intelligence,
              Government Schemes and Crop Management.
            </p>

            <Link to="/login">
              <button className="heroButton">
                Get Started
              </button>
            </Link>

          </div>
        </div>
      </section>

      {/* ================= EXPLORE ================= */}

      <section className="explore" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.65), rgba(255,255,255,.65)), url(${farmBg})` }}>

        <div className="exploreOverlay">

          <h2>Explore AgriSmart Capabilities</h2>

          <p>
            Unlock premium agricultural services designed to maximize crop
            yield efficiency and simplify daily farm administration.
          </p>

          <div className="features">

            {/* Crop */}

            <div className="card">

              <div className="cardLeft">

                <GiFarmer className="featureIcon" />

                <div>

                  <h3>Crop Recommendation</h3>

                  <p>
                    AI-powered crop recommendations based on soil,
                    weather conditions and seasonal analysis to
                    maximize productivity.
                  </p>

                  <button>Manage Crop →</button>

                </div>

              </div>

              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=900"
                alt=""
              />

            </div>


            {/* Weather */}

            <div className="card">

              <div className="cardLeft">

                <FaCloudSun className="featureIcon" />

                <div>

                  <h3>Weather Intelligence</h3>

                  <p>
                    Live weather forecasts, rainfall prediction and
                    severe weather alerts to protect your crops.
                  </p>

                  <button>Sync Weather →</button>

                </div>

              </div>

              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900"
                alt=""
              />

            </div>


            {/* Schemes */}

            <div className="card">

              <div className="cardLeft">

                <FaSeedling className="featureIcon" />

                <div>

                  <h3>Government Schemes</h3>

                  <p>
                    Explore subsidy programmes, crop insurance and
                    financial assistance available for farmers.
                  </p>

                  <button>Check Schemes →</button>

                </div>

              </div>

              <img
                src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=900"
                alt=""
              />

            </div>


            {/* AI */}

            <div className="card">

              <div className="cardLeft">

                <FaRobot className="featureIcon" />

                <div>

                  <h3>AI Chatbot</h3>

                  <p>
                    Ask farming questions in your local language and
                    receive instant intelligent assistance.
                  </p>

                  <button>Chat with AI →</button>

                </div>

              </div>

              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900"
                alt=""
              />

            </div>


            {/* Officer */}

            <div className="card">

              <div className="cardLeft">

                <FaBullhorn className="featureIcon" />

                <div>

                  <h3>Officer Broadcast Center</h3>

                  <p>
                    Agricultural officers can publish announcements,
                    awareness campaigns and emergency alerts.
                  </p>

                  <button>Officer Portal →</button>

                </div>

              </div>

              <img
                src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=900"
                alt=""
              />

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default Home;