import { useState } from "react";
import "../nav.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Left side - logo */}
        <div className="logo">HealthMate</div>

        {/* Hamburger button */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        {/* Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/register" onClick={() => setIsOpen(false)}>Register</Link></li>
          <li><Link to="/login" onClick={() => setIsOpen(false)}>Login</Link></li>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Maps</Link></li>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Chatbot</Link></li>
        </ul>
      </div>
    </nav>
  );
}

