import React from 'react';
import './bgy.css';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { blogs } from '../data/blogs';

const EventsPage = () => {
  return (
    <main className="eventsPageWrapper">
      <div className="eventsContainer">

        <header className="eventsPageHeader">
          <span className="eventsEyebrow">CEA &middot; 2025-26</span>
          <h1 className="eventsHeading">
            Our <span className="headingAccent">EVENTS</span>
          </h1>
          <p className="eventsSubheading">
            Flagship competitions, workshops, and ceremonies hosted by the Civil Engineering Association, IIT Bombay.
          </p>
          <div className="headerDivider" />
        </header>

        <section className="eventsGrid" aria-label="CEA events">
          {blogs.map((event, index) => (
            <article
              key={event.slug}
              className="eventCard"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <span className="eventNumber">{String(index + 1).padStart(2, '0')}</span>

              <div className="eventImageContainer">
                <img
                  src={event.cardImage || event.heroImage}
                  alt={event.cardTitle || event.title}
                  className="eventImage"
                  loading="lazy"
                />
                <div className="eventImageOverlay" />
                <span className="eventTag">{event.tag}</span>
              </div>

              <div className="eventContent">
                <h2 className="eventTitle">{event.cardTitle || event.title}</h2>

                <p className="eventDescription">{event.excerpt}</p>

                {event.highlights && (
                  <div className="highlightsContainer">
                    <h3 className="highlightsTitle">Highlights</h3>
                    <ul className="eventHighlights">
                      {event.highlights.map((point, i) => (
                        <li key={i}>
                          <span className="highlightIcon">
                            <Check size={12} strokeWidth={3} />
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="cardFooter">
                  <NavLink
                    to={`/cea/blog/${event.slug}`}
                    className="knowMoreBtn"
                    aria-label={`Explore ${event.cardTitle || event.title}`}
                  >
                    <span>Explore Event</span>
                    <ArrowRight size={16} className="knowMoreIcon" />
                  </NavLink>
                </div>

              </div>
            </article>
          ))}
        </section>

      </div>
    </main>
  );
};

export default EventsPage;
