import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../chat.css";
import { getGroqReply } from "../components/huggingface";

const Chatbot = () => {
  const storedUser = sessionStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  useEffect(() => {
    if (!user) window.location.href = "/login";
  }, [user]);

  const firstName =
    user?.firstName?.charAt(0).toUpperCase() + user?.firstName?.slice(1) || "Guest";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [symptoms, setSymptoms] = useState([""]);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = "/login";
  };

  const handleFeatureClick = (feature) => {
    setPopupMessage(`${feature} feature is coming soon!`);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2500);
  };

  const handleSymptomChange = (index, value) => {
    const updated = [...symptoms];
    updated[index] = value;
    setSymptoms(updated);
  };

  const addSymptomField = () => setSymptoms([...symptoms, ""]);
  const deleteSymptomField = (index) => {
    if (index === 0) return;
    setSymptoms(symptoms.filter((_, i) => i !== index));
  };


const handleCheck = async () => {
  const cleanSymptoms = symptoms.filter((s) => s.trim() !== "");
  if (!cleanSymptoms.length) return;

  const userMessage = `Patient reports symptoms: ${cleanSymptoms.join(", ")}. 
                       Provide a short, structured medical overview with sections:
                       Quick Overview, Then evauate the user input and suggest the disease or sicknes the user is suffering from.
                       Limit each section to 5-7 short sentences.`;

  try {
    setLoading(true);
    setResult("Checking symptoms...");

    const reply = await getGroqReply(userMessage);

    // Clean markdown but keep section headings
    const formattedReply = reply
      // Remove bullets and extra symbols
      .replace(/[*\-]/g, "")
      // Keep section headings bold
      .replace(/^(Quick Overview|Symptoms|When to See a Doctor|Tips)/gm, "")
      // Collapse multiple empty lines
      .replace(/\n{2,}/g, "\n")
      .trim();

    setResult(formattedReply);
    console.log("Formatted Groq reply:", formattedReply);
  } catch (err) {
    console.error(err);
    setResult("Sorry, I couldn't process your symptoms. Try again later.");
  } finally {
    setLoading(false);
  }
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
            <div className="avatar">{user?.firstName ? user.firstName[0].toUpperCase() : "G"}</div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      {isMenuOpen && (
        <div className="sidebar">
          <button aria-label="Close menu" className="close-btn" onClick={() => setIsMenuOpen(false)}>
            <X className="menu-icon" />
          </button>
          <ul className="sidebar-list">
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li onClick={() => handleFeatureClick("Doctors / Care Team")}>Doctors / Care Team</li>
            <li onClick={() => handleFeatureClick("Reports")}>Reports</li>
            <li onClick={() => handleFeatureClick("Settings")}>Settings</li>
            <li onClick={handleLogout}>Log Out</li>
          </ul>
        </div>
      )}

      {/* Popup */}
      {showPopup && <div className="popup">{popupMessage}</div>}

      {/* Main Section */}
      <main className="chatbot-main">
        <h2>Check your symptoms</h2>

        <div className="symptom-fields">
          {symptoms.map((symptom, i) => (
            <div key={i} className="symptom-input">
              <input
                type="text"
                placeholder="e.g. cold"
                value={symptom}
                onChange={(e) => handleSymptomChange(i, e.target.value)}
              />
              <button className="add-btn" onClick={addSymptomField}>
                <i className="bi bi-plus-circle"></i>
              </button>
              {i > 0 && (
                <button className="delete-btn" onClick={() => deleteSymptomField(i)}>
                  <i className="bi bi-trash"></i>
                </button>
              )}
            </div>
          ))}
        </div>

        <button className="check-btn" onClick={handleCheck} disabled={loading}>
          {loading ? "Checking..." : "Check"}
        </button>

        {result && (
          <div className="result-box">
            <p>{result}</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Chatbot;



