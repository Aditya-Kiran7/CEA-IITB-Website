import React from 'react';
import './tech.css';
import { NavLink } from 'react-router-dom';

const technologies = [
  {
    id: 1,
    name: 'Inter-IIT Esports Event',
    tag: 'Esports Event',
    image: '/cea/images/esports.jpg', // change path as needed
    description: 'The Inter-IIT Esports Event is a prestigious gathering of gamers from various IITs to compete and showcase their skills.',
    highlights: [
      'BGMI Tournament',
      'Valorant Tournament',
      'CLASH ROYALE, STUMBLE GUYS',
    ],
    link: '/cea/esports',
    // <NavLink to="/cea/blogPage">Blogs</NavLink>
  },
  {
    id: 2,
    name: 'Summer of Core',
    tag: 'Esports Event',
    image: '/cea/images/soc.png', // change path as needed
    description: 'The Summer of Core is a unique event aimed at enhancing the core skills of students through workshops and hands-on sessions.',
    highlights: [
      'learn solidworks, ETABS, Microsoft office from experts',
      'Benifits : SOC Certification, Resume Building, Internship Opportunities',
      'Upskilling through practical exposure',
    ],
    link: '/cea/soc',
  },
];

const Tech = () => {
  return (
    <div className="events-container">
      <h1 className="events-heading">Projects Under Professors</h1>
      <div className="events-grid">
        {technologies.map(technology => (
          <div key={technology.id} className="event-card">
            <img src={technology.image} alt={technology.name} className="event-image" />
            <div className="event-content">
              <div className="event-label">{technology.tag}</div>
              <h2 className="event-title">{technology.name}</h2>
              <p className="event-description">{technology.description}</p>
              <ul className="event-highlights">
                {technology.highlights.map((point, index) => (
                  <li key={index}>• {point}</li>
                ))}
              </ul>

              <NavLink to={technology.link} className="know-more-btn" target="_blank" rel="noopener noreferrer">Know More</NavLink>

              {/* <a href={technology.link} className="know-more-btn" target="_blank" rel="noopener noreferrer">
                Know More →
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
