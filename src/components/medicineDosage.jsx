import React from 'react';
import './medicineDosage.css'; // Assuming you have a CSS file for styling

const medicineDosage = () => {
    let logo = require('../images/projectLogo.png');
    let morning = require('../images/Ellipse 372.png');
    let day = require('../images/Ellipse 373.png');
    let evening = require('../images/Union (1).png')
    let night = require('../images/Union.png');
    let profile = require('../images/pexels-photo-462680.png');
    // let notifyBell = require('../images/Group 7924.png')
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
            <li id='active'>Medicine Dosage Schedule</li>
            <li>Self-Help Tips</li>
            <li>Log Out</li>
          </ul>
        </nav>
      </aside>

      <main className="appointment-content">
        <header>
          <div className="user-info">
            {/* <img src={notifyBell} alt="Notify Bell" className="notifyBell"/> */}
            <span>Welcome Jeffrey</span>
            <img src={profile} alt="Profile" />
          </div>
        </header>

        <div className="med">
            <button>Create MDS</button>
        </div>

        <ul id='frequency'>
            <li>
                <img src={morning} alt="" />
                <p>Morning</p>
            </li>
            <li>
                <img src={day} alt="" />
                <p>Day</p>
            </li>
            <li>
                <img src={evening} alt="" />
                <p>Evening</p>
            </li>
            <li>
                <img src={night} alt="" />
                <p>Night</p>
            </li>
        </ul>
      </main>
    </div>
  );
};

export default medicineDosage;