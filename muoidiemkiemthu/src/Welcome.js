import React, { useState } from "react";
import "./Welcome.css"; // Import file CSS

function Welcome({ onJoin }) {
  const [name, setName] = useState("");

  const handleJoin = () => {
    if (name.trim()) {
      onJoin(name);
    } else {
      alert("Please enter your name!");
    }
  };

  return (
    <div className="welcome-container">
      <h2>Nhập Tên Mày </h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="name-input"
      />
      <button onClick={handleJoin} className="join-button">Join</button>
    </div>
  );
}

export default Welcome;
