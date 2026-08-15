import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Zap, Terminal } from 'lucide-react';
import './events.css';

// Event data
const events = [
  {
    id: 1,
    name: 'Inter-IIT Esports',
    tag: 'COMPETITIVE',
    image: '/cea/images/esports.jpg',
    description: 'The prestigious gathering of gamers from various IITs to compete and showcase their digital combat skills.',
    highlights: ['BGMI Tournament', 'Valorant Protocol', 'Clash Royale Arena'],
    link: '/cea/esports',
  },
  {
    id: 2,
    name: 'Summer of Core',
    tag: 'UPSKILLING',
    image: '/cea/images/soc.png',
    description: 'Enhancing the core skills of students through intensive workshops and hands-on technical sessions.',
    highlights: ['Solidworks Mastery', 'ETABS Simulation', 'Certified Training'],
    link: '/cea/soc',
  },
  {
    id: 3,
    name: 'Freshers Orientation',
    tag: 'INITIATION',
    image: '/cea/images/oreo.jpeg',
    description: 'A full-day celebration of concrete engineering innovation with hands-on events and demos.',
    highlights: ['Cube Testing', 'Mix Design Challenge', 'Expert Data Uplink'],
    link: '/cea/oreo',
  },
  {
    id: 4,
    name: 'Convocation 2025',
    tag: 'CEREMONY',
    image: '/cea/images/inviteconvo25.png',
    description: 'Celebrating the achievements and system graduation of our B.Tech, M.Tech, and Ph.D. units.',
    highlights: ['Degree Conferral', 'Chief Guest Address', 'Academic Excellence'],
    link: '/cea/convocation',
  },
];

const Events = () => {
  const navigate = useNavigate();

  return (
    <div className="events-page-wrapper">
      {/* Background Cyber Grid */}
      <div className="bgGrid"></div>

      <div className="events-container">
        
        {/* Header Section */}
        <header className="events-header">
           <button className="back-btn" onClick={() => navigate('/')}>
             <ArrowLeft size={20} /> <span className="btn-text">System Return</span>
           </button>
           
           <h1 className="events-heading">
             Our <span className="neon-cyan">PROTOCOLS</span>
           </h1>
           <div className="tech-divider"></div>
           <p className="events-subheading">
             <span className="blink">_</span> ACCESSING DEPARTMENTAL EVENT LOGS
           </p>
        </header>

        {/* Events Grid */}
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="cyber-card">
              
              {/* Image Section */}
              <div className="card-image-wrapper">
                <div className="image-overlay"></div>
                <img src={event.image} alt={event.name} className="event-image" />
                <div className="tech-tag">{event.tag}</div>
              </div>

              {/* Content Section */}
              <div className="card-content">
                <h2 className="event-title">
                  {event.name}
                </h2>
                
                <p className="event-desc">{event.description}</p>

                <div className="highlights-box">
                  <h3 className="highlights-title"><Terminal size={14}/> HIGHLIGHTS_</h3>
                  <ul className="highlights-list">
                    {event.highlights.map((point, index) => (
                      <li key={index}>
                        <span className="bullet">{'>'}</span> {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-action">
                  <NavLink to={event.link} className="cyber-button">
                    <span className="btn-text">INITIALIZE EVENT <Zap size={16} fill="currentColor" /></span>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Events;