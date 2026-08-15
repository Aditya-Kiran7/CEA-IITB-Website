import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Fan as Fax, Mail } from 'lucide-react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* External Navigation */}
          <div className="footer-section">
            <h3 className="footer-section-title">External Navigation</h3>
            <ul className="footer-links">
              <li><a href="http://eeri.org/" className="footer-link">EERI</a></li>
              <li><a href="http://www.civil.iitb.ac.in/" className="footer-link">Civil, IIT Bombay</a></li>
              <li><a href="http://www.iitb.ac.in/" className="footer-link">IIT Bombay Main Site</a></li>
            </ul>
          </div>

          {/* Connect with us */}
          <div className="footer-section">
            <h3 className="footer-section-title">Connect with us</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/ceaiitb/" className="social-link" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/cea.iitb/" className="social-link" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://www.linkedin.com/company/civil-engineering-association-iit-bombay/" className="social-link" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="https://www.youtube.com/channel/UCI8BSW0QwH2H4WFt8Th6uXw" className="social-link" aria-label="YouTube">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-section-title">Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={18} className="contact-icon" />
                <div className="contact-text">
                  <p>The Head, Department of Civil Engineering, Indian Institute of Technology Bombay, Powai, Mumbai - 400076, India.</p>
                </div>
              </div>
              <div className="contact-item">
                <Phone size={18} className="contact-icon" />
                <div className="contact-text">
                  <p>+91-22-2576 7301</p>
                </div>
              </div>
              <div className="contact-item">
                <Fax size={18} className="contact-icon" />
                <div className="contact-text">
                  <p>+91-22-2576 7301</p>
                </div>
              </div>
              <div className="contact-item">
                <Mail size={18} className="contact-icon" />
                <div className="contact-text">
                  <p>hod@civil.iitb.ac.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="copyright">
            © Civil Engineering Association, IIT Bombay. All Rights Reserved 2025.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;