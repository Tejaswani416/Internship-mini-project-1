import React, { useState } from "react";
import "./App.css";

function App() {
  const [devices, setDevices] = useState([
    { id: 1, name: "Living Room Lights", icon: "💡", status: true },
    { id: 2, name: "Air Conditioner", icon: "❄️", status: false },
    { id: 3, name: "Smart TV", icon: "📺", status: true },
    { id: 4, name: "Security Camera", icon: "📷", status: true },
  ]);

  const toggleDevice = (id) => {
    setDevices(
      devices.map((device) =>
        device.id === id
          ? { ...device, status: !device.status }
          : device
      )
    );
  };

  return (
    <div className="dashboard">

      <h1>🏠 Smart Home Dashboard</h1>

      <div className="top-section">
        <div className="weather-card">
          <h2>🌡 Temperature</h2>
          <h3>24°C</h3>
          <p>Comfort Mode Active</p>
        </div>

        <div className="security-card">
          <h2>🔐 Security</h2>
          <h3>Protected</h3>
          <p>All doors are locked</p>
        </div>
      </div>

      <h2 className="title">Smart Devices</h2>

      <div className="device-container">
        {devices.map((device) => (
          <div
            className={device.status ? "device-card active" : "device-card"}
            key={device.id}
          >
            <h1>{device.icon}</h1>

            <h3>{device.name}</h3>

            <p>
              Status:
              <span>
                {device.status ? " ON" : " OFF"}
              </span>
            </p>

            <button
              onClick={() => toggleDevice(device.id)}
            >
              Toggle
            </button>
          </div>
        ))}
      </div>

      <h2 className="title">⚡ Energy Consumption</h2>

      <div className="energy-section">

        <div className="energy-card">
          <p>Lights</p>
          <div className="bar">
            <div className="fill lights">
              65%
            </div>
          </div>
        </div>

        <div className="energy-card">
          <p>Air Conditioner</p>
          <div className="bar">
            <div className="fill ac">
              85%
            </div>
          </div>
        </div>

        <div className="energy-card">
          <p>TV & Electronics</p>
          <div className="bar">
            <div className="fill tv">
              40%
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;