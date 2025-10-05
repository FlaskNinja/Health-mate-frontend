import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "../dashnav.css";
import ChatbotButton from "../components/Chatbot";
import { Link } from "react-router-dom";

const Popup = ({ message, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>Coming Soon 🚀</h3>
        <p>{message}</p>
        <button className="popup-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const storedUser = sessionStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    }
  }, [user]);

  const firstName =
    user?.firstName?.charAt(0).toUpperCase() + user?.firstName?.slice(1) || "Guest";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = "/login";
  };

  const handleFeatureClick = (feature) => {
    setPopupMessage(`${feature} feature is coming soon!`);
    setShowPopup(true);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-left">
            <button
              aria-label="Open menu"
              className="menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
            </button>
            <div className="greeting">Hi, {firstName}</div>
          </div>
          <div className="navbar-right">
            <button className="dashboard-btn">Dashboard</button>
            <div className="avatar">
              {user?.firstName ? user.firstName[0].toUpperCase() : "G"}
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      {isMenuOpen && (
        <div className="sidebar">
          <button
            aria-label="Close menu"
            className="menu-button"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="menu-icon" />
          </button>
          <ul className="sidebar-list">
            <li>Dashboard</li>
            <li><Link to="/profile">Profile</Link></li>
            <li onClick={() => handleFeatureClick("Doctors / Care Team")}>Doctors / Care Team</li>
            <li onClick={() => handleFeatureClick("Reports")}>Reports</li>
            <li onClick={() => handleFeatureClick("Settings")}>Settings</li>
            <li onClick={handleLogout}>Log Out</li>
          </ul>
        </div>
      )}

      {/* Dashboard Content */}
      <div className="dashboard-container">
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="card-icon-container">
              <i className="bi bi-file-medical-fill card-icon"></i>
            </div>
            <div className="card-text">
              <h4>Consult Doctor</h4>
              <p className="incoming-text">Next: Dr. Johnson at 3:00 PM</p>
              <button className="small-btn" onClick={() => handleFeatureClick("Consult Doctor")}>
                Join Call
              </button>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="card-icon-container">
              <i className="bi bi-heart-pulse-fill card-icon-red"></i>
            </div>
            <div className="card-text">
              <h4>Check Symptoms</h4>
              <p className="incoming-text">Track how you feel today</p>
              {/* <button className="small-btn" onClick={() => handleFeatureClick("Check Symptoms")}> */}
              <p className="small-btn"><Link to="/chatbot"}>Start Check</Link></p>
              {/* </button> */}
            </div>
          </div>

          <div className="dashboard-card">
            <div className="card-icon-container">
              <i className="bi bi-calendar-check-fill card-icon-gd"></i>
            </div>
            <div className="card-text">
              <h4>Appointments</h4>
              <p className="incoming-text">2 upcoming this week</p>
              <button className="small-btn" onClick={() => handleFeatureClick("Appointments")}>
                View Schedule
              </button>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="card-icon-container">
              <i className="bi bi-wallet-fill card-icon"></i>
            </div>
            <div className="card-text">
              <h4>My Wallet</h4>
              <p className="incoming-text">Balance: ₦12,500</p>
              <button className="small-btn" onClick={() => handleFeatureClick("My Wallet")}>
                Top Up
              </button>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="card-icon-container">
              <i className="bi bi-hospital-fill card-icon"></i>
            </div>
            <div className="card-text">
              <h4>Nearby Clinics</h4>
              <p className="incoming-text">3 clinics within 5km</p>
              <button className="small-btn" onClick={() => handleFeatureClick("Nearby Clinics")}>
                Find Clinics
              </button>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="card-icon-container">
              <i className="bi bi-activity card-icon"></i>
            </div>
            <div className="card-text">
              <h4>Health Goals</h4>
              <p className="incoming-text">Steps today: 4,200 / 10,000</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: "42%" }}></div>
              </div>
              <button className="small-btn" onClick={() => handleFeatureClick("Health Goals")}>
                Track Goals
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Health Tips Section */}
      <div className="health-tips-section">
        <h2>Daily Health Tips</h2>
        <ul>
          <li>💧 Drink at least 8 glasses of water today.</li>
          <li>🥗 Eat more leafy greens for energy.</li>
          <li>🏃 Get at least 30 minutes of exercise.</li>
        </ul>
        <a
          href="https://www.who.int/home"
          target="_blank"
          rel="noopener noreferrer"
          className="tips-btn"
        >
          More Health Tips in Nigeria
        </a>
      </div>

      {/* Health News Section */}
      <div className="health-news-section">
        <h2>Latest Health News</h2>
        <ul>
          <li>💉 Nigeria ramps up vaccination campaigns nationwide.</li>
          <li>🌍 WHO warns about rising malaria cases in West Africa.</li>
          <li>🧘 Study finds daily meditation reduces stress by 40%.</li>
        </ul>
        <a
          href="https://edition.cnn.com/health"
          target="_blank"
          rel="noopener noreferrer"
          className="news-btn"
        >
          More Health News
        </a>
      </div>

      {/* Popup Modal */}
      {showPopup && <Popup message={popupMessage} onClose={() => setShowPopup(false)} />}

      <ChatbotButton />
    </div>
  );
};

export default Dashboard;




