import React, { useState } from "react";
import "./card.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Card = ({ image, name, designation, mobile, email, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleDescription = () => setIsExpanded(!isExpanded);

  const truncateText = (text, length) =>
    text.length > length ? text.slice(0, length) + "..." : text;

  return (
    <div className="team-card">
      <div className="card-header">
        <div className="avatar-container">
          <img src={image} alt={name} className="team-avatar" />
          <div className="avatar-overlay">View</div>
        </div>
      </div>
      <div className="card-content">
        <h3 className="team-name">{name}</h3>
        <p className="team-designation">{designation}</p>
        <div className="contact-details">
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <a href={`tel:${mobile}`} className="contact-link">
              {mobile}
            </a>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href={`mailto:${email}`} className="contact-link">
              {email}
            </a>
          </div>
        </div>
        <div className="description-section">
          <p className="team-description">
            {isExpanded ? description : truncateText(description, 120)}
          </p>
          {description.length > 120 && (
            <button onClick={toggleDescription} className="read-more-btn">
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
