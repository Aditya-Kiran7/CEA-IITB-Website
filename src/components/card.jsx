import React from 'react';
import './card.css';

// Using simple SVG icons for no dependencies. 
// You could swap these for react-icons (e.g., FaEnvelope, FaPhone)
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const Card = ({ image, name, designation, description, email, mobile }) => {
  // Fallback image if none provided
  const displayImage = image || "https://via.placeholder.com/150/050511/805ad5?text=Member";

  return (
    <div className="council-card">
      <div className="card-glow-border"></div>
      <div className="card-image-wrapper">
        <div className="image-ring spinner"></div>
        <img src={displayImage} alt={name} className="card-image" />
      </div>
      
      <div className="card-content">
        <h3 className="member-name">{name}</h3>
        <span className="member-role">{designation}</span>
        {description && <p className="member-desc">{description}</p>}
        
        <div className="card-contacts">
          {email && (
            <a href={`mailto:${email}`} className="contact-link" title={email}>
              <MailIcon /> 
              <span className="contact-text">{email.split('@')[0]}...</span> {/* Truncate email for neatness */}
            </a>
          )}
          {mobile && (
            <a href={`tel:${mobile}`} className="contact-link" title={mobile}>
              <PhoneIcon />
              <span className="contact-text">Call</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;