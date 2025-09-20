import { useState } from "react";
import { Link } from 'react-router-dom';
import "../nav.css";
import heroImg from "../img/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="nav-logo">
        <img src={heroImg} alt="" />
        <Link to="/" className="logo">
          HealthMate
        </Link>
        </div>

        {/* Desktop Menu */}
        <div className={`nav-as ${isOpen ? "active" : ""}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/chatbot" onClick={toggleMenu}>Chatbot</Link>
          <Link to="/hotlines" onClick={toggleMenu}>Hotlines</Link>
          <Link to="/register" className="btn-primary" onClick={toggleMenu}>Register</Link>
          <Link to="/login" className="btn-outline" onClick={toggleMenu}>Login</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
    </nav>
  );
}
