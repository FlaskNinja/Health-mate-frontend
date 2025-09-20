import React from "react";
import "../loading.css"; // Import the CSS file
import heroImg from "../img/logo.png";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="pulse-circle">
        <img src={heroImg} alt="" className="pulse-circle" />
      </div>
      <h2 className="loading-text">Health Mate</h2>
    </div>
  );
};

export default Loading;
