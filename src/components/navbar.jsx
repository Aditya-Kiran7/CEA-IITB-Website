import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import { Instagram } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
      {/* Logo */}
      <NavLink to="/cea/" className="logo">
        {/* Added specific class to invert logo color if needed */}
        <img src="/cea/images/transblack.png" alt="CEA Logo" className="logo-img" />
      </NavLink>

      {/* Desktop links */}
      <nav className="nav-links">
        <NavLink to="/cea/" end>Home</NavLink>
        <NavLink to="/cea/events">Events</NavLink>
        <NavLink to="/cea/council">Council</NavLink>
        <NavLink to="/cea/gallery">Gallery</NavLink>
        <NavLink to="/cea/publication">Publication</NavLink>
        <NavLink to="/cea/blogPage">Blogs</NavLink>
      </nav>

      {/* CTA buttons */}
      <div className="cta-wrapper">
        <a
          href="https://www.instagram.com/cea.iitb/"
          target="_blank" 
          rel="noopener noreferrer"
          className="try-button"
        >
          InstaGram <span className="arrow">➔</span>
        </a>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setIsOpen(prev => !prev)}
          aria-label="Toggle navigation"
        >
          <div className={isOpen ? 'bar open' : 'bar'} />
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="mobile-drawer">
          <NavLink to="/cea/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/cea/events" onClick={() => setIsOpen(false)}>Events</NavLink>
          {/* <NavLink to="/cea/blogPage" onClick={() => setIsOpen(false)}>Blogs</NavLink> */}
          <NavLink to="/cea/council" onClick={() => setIsOpen(false)}>Council</NavLink>
          <NavLink to="/cea/gallery" onClick={() => setIsOpen(false)}>Gallery</NavLink>
          <NavLink to="/cea/publication" onClick={() => setIsOpen(false)}>Publication</NavLink>
          <NavLink to="/cea/blogPage" onClick={() => setIsOpen(false)}>Blogs</NavLink>

          {/* Mobile Dropdown Logic
          <div className="mobile-dropdown-wrapper">
            <button 
              className="mobile-drop-trigger" 
              onClick={() => setMobileDropdown(!mobileDropdown)}
            >
              Projects ▾
            </button>
            {mobileDropdown && (
              <div className="mobile-submenu">
                <NavLink to="/cea/project1" onClick={() => setIsOpen(false)}>Tech</NavLink>
                <NavLink to="/cea/project2" onClick={() => setIsOpen(false)}>Finance</NavLink>
                <NavLink to="/cea/project3" onClick={() => setIsOpen(false)}>Core</NavLink>
              </div>
            )}
          </div> */}

          <hr />
          
          <a onClick={() => setIsOpen(false)} href="https://www.iitb.ac.in/" target="_blank" rel="noreferrer">
            Official IIT Bombay Website
          </a>

          <a
            onClick={() => setIsOpen(false)}
            href="https://www.civil.iitb.ac.in/"
            target="_blank" 
            rel="noreferrer"
            className="cta-btn full"
          >
            Visit Civil Dept. <span className="arrow">➔</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;