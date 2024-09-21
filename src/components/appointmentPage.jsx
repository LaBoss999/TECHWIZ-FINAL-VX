import React from 'react';
import './appointmentPage.css';

function appointmentPage(){
  let logo = require("../images/projectLogo.png");
  let appoint1 = require('../images/3d-icon-social-media-app_23-2150049569.avif');
  let appoint2 = require('../images/3d-illustration-person-with-sunglasses_23-2149436188.avif');
  let appoint3 = require('../images/3d-render-avatar-character_23-2150611698.avif');
  let appoint4 = require('../images/3d-render-avatar-character_23-2150611704.avif');
  let appoint5 = require('../images/3d-render-avatar-character_23-2150611707.avif');
  return (
    <div className="container">
      <aside className="sidebar">   
        <div className="logo">
          <img src={logo} alt="HealthPlus Logo" id='logo' />
        </div>
        <nav>
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#" id='active'>Appointment</a></li>
            <li><a href="#">Personal Health Vitals</a></li>
            <li><a href="#">Medicine Dosage Schedule</a></li>
            <li><a href="#">Feedback</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Log Out</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="content">
        <header className="header">
          <button className="appointment-btn">Create Appointment +</button>
        </header>

        {/* Appointment Section */}
        <section className="appointments">
          {/* Upcoming Appointment */}
          <div className="appointment upcoming">
            <h2>Upcoming Appointment</h2>
            <div className="appointment-item">
              <img src={appoint1} alt="Patient" className="user-img" />
              <div className="details">
                <p className="name">Faith Kareem</p>
                <p className="info">26th May, 2020 | 2:00 PM | Gynaecologist</p>
              </div>
              <button className="status available">Available</button>
            </div>
          </div>

          {/* Previous Appointments */}
          <div className="appointment previous">
            <h2>Previous Appointment</h2>
            <div className="appointment-item">
              <img src={appoint2} alt="Patient" className="user-img" />
              <div className="details">
                <p className="name">Akingbade Williams</p>
                <p className="info">2nd June, 2020 | 2:25 PM | Doctor</p>
              </div>
              <button className="status view">View</button>
            </div>

            <div className="appointment-item">
              <img src={appoint3} alt="Patient" className="user-img" />
              <div className="details">
                <p className="name">Roman Reigns</p>
                <p className="info">2nd May, 2021 | 11:00 AM | Doctor</p>
              </div>
              <button className="status view">View</button>
            </div>

            <div className="appointment-item">
              <img src={appoint4} alt="Patient" className="user-img" />
              <div className="details">
                <p className="name">God of Thunder</p>
                <p className="info">2nd January, 2022 | 11:00 AM | Doctor</p>
              </div>
              <button className="status view">View</button>
            </div>

            <div className="appointment-item">
              <img src={appoint5} alt="Patient" className="user-img" />
              <div className="details">
                <p className="name">The Slinger</p>
                <p className="info">2nd May, 2023 | 11:00 AM | Doctor</p>
              </div>
              <button className="status view">View</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default appointmentPage;
