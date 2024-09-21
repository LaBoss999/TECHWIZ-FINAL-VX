import React, { useRef } from 'react';
import './selfHealthTips.css';

const SelfHealthTips = () => {
  let logo = require('../images/projectLogo.png');
  let profile = require('../images/pexels-photo-462680.png');
  let video1 = require('../images/vd1.mp4');
  let video2 = require('../images/vd2.mp4');
  
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const handleVideoClick = (videoRef) => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.mozRequestFullScreen) { /* Firefox */
      videoRef.current.mozRequestFullScreen();
    } else if (videoRef.current.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) { /* IE/Edge */
      videoRef.current.msRequestFullscreen();
    }
  };

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
            <li id='active'>Self-Help Tips</li>
            <li>Log Out</li>
          </ul>
        </nav>
      </aside>

      <main className="appointment-content">
        <header>
          <div className="user-info">
            <span>Welcome Jeffrey</span>
            <img src={profile} alt="Profile" />
          </div>
        </header>

        <div>
          <div id='vidContainer'>
            <video
              ref={videoRef1}
              src={video1}
              onClick={() => handleVideoClick(videoRef1)}
              controls
            ></video>
            <video
              ref={videoRef2}
              src={video2}
              onClick={() => handleVideoClick(videoRef2)}
              controls
            ></video>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SelfHealthTips;