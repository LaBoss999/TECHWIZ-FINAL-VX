import React from 'react';
import './success.css'; // Assuming you have a CSS file for styling

const AppointmentSubmitted = () => {
    let successImg = require('../images/success icon.png');
    let logo = require('../images/projectLogo.png');
  return (
    <div className="appointment-container">
      <aside className="sidebar">
        <div className="logo">
          <img src={logo} alt="Logo" id='logo' />
        </div>
        <nav>
          <ul>
            <li className="active">Dashboard</li>
            <li>Appointment</li>
            <li>Personal Health Vitals</li>
            <li>Medicine Dosage Schedule</li>
            <li>Self-Help Tips</li>
            <li>Log Out</li>
          </ul>
        </nav>
      </aside>

      <main className="appointment-content">
        <header>
          <div className="user-info">
            <span>Welcome Jeffrey</span>
            <img src="/path/to/profile-pic.jpg" alt="Profile" />
          </div>
        </header>

        <div className="submission-message">
          <div className="submission-icon">
            <img src={successImg} alt="Success" />
          </div>
          <h2>Appointment submitted</h2>
          <p>You will be notified when your appointment is approved</p>
        </div>
      </main>
    </div>
  );
};

export default AppointmentSubmitted;