import { useState } from "react";
import { Menu, X } from "lucide-react";
import "../nav.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">HealthMate</h1>

        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/#features">Features</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

