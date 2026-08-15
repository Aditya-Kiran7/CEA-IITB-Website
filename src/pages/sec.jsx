import React from 'react';
import './sec.css';

const Sec = () => {
  return (
    <div className="sec-container">
      <div className="sec-content">
        <div className="text-section">
          <h1 className='sec-title'>
            Civil Engineering <br /> Association, <br /> IIT Bombay
            <span className="accent-lines"></span>
          </h1>
          <p>
            The Civil Engineering Association (CEA) at IIT Bombay was established with the{' '}
            <strong>primary goal</strong> of disseminating knowledge and addressing industrial issues by bringing corporates, professors, and students together on a common platform.
          </p>
          <div className="buttons">
            <button className="instagram-btn">Instagram</button>
            <button className="youtube-btn">YouTube</button>
          </div>
        </div>
        <div className="image-section">
          <div className="main-image">
            {/* Placeholder for the image */}
            <div className="image-placeholder">
                <img src="/cea/images/homeimg.png" alt="Furniture" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec;
