import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import heroImg from "../img/doc 2.jpg";
import "../home.css";
import { Link } from "react-router-dom";
import Loading from "../components/Loading"; // 👈 import your loading screen
import Footer from "../components/Footer";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Keep loading screen for 2 seconds
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer); // cleanup
  }, []);

  if (loading) {
    return <Loading />; // 👈 show loading first
  }

  return (
    <div className="home">
      <Navbar />

      <div className="hero">
        <div className="hero-txt">
          <h2>
            Trusted Help and Support at your <span>Fingertips!</span>
          </h2>
          <p>
            "HealthMate connects you to doctors, hotlines, and health resources
            across Nigeria — quickly, safely, and reliably."
          </p>
          <div className="cta-btn">
            <button>Get Help Now</button>
            <button>Talk to a Doctor</button>
          </div>
        </div>

        <div className="hero-img">
          <img src={heroImg} alt="hero image" />
        </div>
      </div>

      {/* Features Section */}
      <div className="features">
        <h2>Our Key Features</h2>
        <ul>
          <li>
            <i className="bi bi-telephone-fill"></i>
            <h3>Emergency Hotlines</h3>
            <p>Instant access to verified Nigerian emergency health numbers.</p>
          </li>
          <li>
            <i className="bi bi-robot"></i>
            <h3>AI Health Chatbot</h3>
            <p>
              Get quick health answers and guidance from our intelligent
              assistant.
            </p>
          </li>
          <li>
            <i className="bi bi-geo-alt-fill"></i>
            <h3>Hospital & Pharmacy Locator</h3>
            <p>
              Find the nearest hospitals, clinics, and pharmacies around you in
              seconds.
            </p>
          </li>
          <li>
            <i className="bi bi-person-badge-fill"></i>
            <h3>Connect with Doctors</h3>
            <p>
              Book appointments or chat directly with licensed healthcare
              providers.
            </p>
          </li>
        </ul>
      </div>

      {/* About Section */}
      <div className="about">
        <h2>
          <i className="bi bi-heart-pulse-fill"></i> About HealthMate
        </h2>
        <p>
          HealthMate is built to improve healthcare access in Nigeria by
          bridging the gap between patients and providers. Whether you need
          emergency help, medical advice, or directions to the nearest hospital,
          HealthMate ensures support is always within your reach.
        </p>
      </div>

      {/* CTA Section */}
      <div className="cta">
        <h2>Your Health, Our Priority</h2>
        <p>Start your journey towards better healthcare today.</p>
        <button>
          <Link to="/login">Join HealthMate</Link>
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
