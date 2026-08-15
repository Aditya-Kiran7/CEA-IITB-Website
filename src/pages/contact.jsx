import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <main className="contact-page">
      <div className="contact-inner">
        <header className="contact-header">
          <span className="contact-eyebrow">Get in touch</span>
          <h1 className="contact-title">
            Contact <span className="contact-accent">Us</span>
          </h1>
          <p className="contact-subtitle">
            Have a question or want to collaborate with the Civil Engineering Association?
            Fill out the form below and our team will get back to you.
          </p>
        </header>

        <div className="form-embed-wrapper">
          <iframe
            title="CEA Contact Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfylYwI3JHOWjdjhzqLXj3b_f5JLRy-AN3MurSjsAH1cxrCRw/viewform?embedded=true"
            width="640"
            height="381"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </main>
  );
};

export default Contact;