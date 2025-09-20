import React from "react";
import "../chat.css"; // Import the CSS file

export default function ChatbotButton() {
  const handleClick = () => {
    // You can add logic here to open a chat window or modal
    console.log("Chatbot button clicked!");
  };

  return (
    <div className="chatbot-container">
      <button 
        className="chatbot-btn" 
        onClick={handleClick}
        aria-label="Open chatbot"
      >
        <i className="bi bi-chat-dots-fill chatbot-icon"></i>
      </button>
    </div>
  );
}