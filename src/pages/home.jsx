import React from 'react';
import './home.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page-bg">
      <div className="main-white-container">
        
        <section className="home-container">
          {/* LEFT SIDE */}
          <div className="home-left">
            <div className="tag">CEA 2025-26</div>

            <h1 className="title">
            Civil Engineering Association, <br />
            IIT Bombay
            </h1>

            <p className="description">
              The Civil Engineering Association (CEA) at IIT Bombay was established with the primary goal of disseminating knowledge and addressing industrial issues by bringing corporates, professors, and students together on a common platform.
            </p>

            <div className="actions">
              <button className="google-btn" onClick={() => window.location.href = "https://www.youtube.com/@civilengineeringassociatio2561/featured"}>
                 Visit Our official YouTube Channel
              </button>
              <button className="email-btn" onClick={() => window.location.href = "https://www.instagram.com/cea.iitb/"}>
                InstaGram Page  <span className="arrow">➔</span>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="home-right">
            <img
              src='/cea/images/ceafinal.png'
              alt="civil"
              className = "home-image"
              />
            
          </div>
        </section>

        {/* SECOND SECTION */}
        <section className="second-section">
          <h2 className="second-heading">Introduction, The Events By CEA</h2>
          <p className="second-subheading">
            Get to Know About the Civil Engineering Association, IIT Bombay. Events which are conducted by CEA, IIT Bombay.
          </p>
          <button className="second-btn"><NavLink to="/cea/events">See Events ➔</NavLink></button>

          <div className="cards-wrapper">
            <div className="card">
              <span className="card-number">01</span>
              <h3>What is CEA?</h3>
              <p>The Civil Engineering Association (CEA) is the bridge that brings the entire Civil family together—students, faculty, and alumni. We connect dreams with guidance, doubts with solutions, and opportunities with the people who deserve them, creating a bond that inspires growth and happiness.</p>
            </div>

            <div className="card">
              <span className="card-number">02</span>
              <h3>Aakaar</h3>
              <p>Aakaar, the annual festival of the Civil Engineering Department at IIT Bombay, is organized by the student body of the Civil Engineering Association at IIT Bombay. Aakaar gives budding civil engineers across the country a platform to create, innovate, and learn about various aspects of civil engineering through competitions, workshops, panel discussions, and symposiums (research paper conference). Aakaar has since gone on to become the undisputed leader in civil engineering festivals.</p>
            </div>

            <div className="card">
              <span className="card-number">03</span>
              <h3>EERI</h3>
              <p>CEA Student Bodies are also involved in an international civil engineering organization called 'EERI.' Since 1948, the Earthquake Engineering Research Institute (EERI) has been the leading non-profit membership organization connecting professionals worldwide dedicated to reducing earthquake risk.</p>
            </div>
          </div>
        </section>

        
        <section className="fourth-section">
          <h2 className="fourth-section-heading">...and we do so much more!</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon"><span>💳</span></div>
              <div className="feature-title">Accept payments</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><span>🎥</span></div>
              <div className="feature-title">Videos of major events<br />on YouTube</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><span>🔗</span></div>
              <div className="feature-title">Read civil related Blogs </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><span>📸</span></div>
              <div className="feature-title">View Gallery</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><span>📄</span></div>
              <div className="feature-title">View Publications</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><span>📱</span></div>
              <div className="feature-title">Instagram</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><span>🏛️</span></div>
              <div className="feature-title">Council</div>
            </div>
          </div>
        </section>


      </div>
    </div>
  );
};

export default Home;