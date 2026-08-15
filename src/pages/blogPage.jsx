import React from 'react';
import './bgy.css';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogs } from '../data/blogs';

const BlogPage = () => {
  return (
    <main className="eventsPageWrapper">
      <div className="eventsContainer">

        <header className="eventsPageHeader">
          <span className="eventsEyebrow">CEA &middot; Blogs</span>
          <h1 className="eventsHeading">
            Our <span className="headingAccent">BLOGS</span>
          </h1>
          <p className="eventsSubheading">
            Stories, recaps, and insights from the Civil Engineering Association, IIT Bombay.
          </p>
          <div className="headerDivider" />
        </header>

        <section className="eventsGrid" aria-label="CEA blogs">
          {blogs.map((blog, index) => (
            <article
              key={blog.slug}
              className="eventCard"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <span className="eventNumber">{String(index + 1).padStart(2, '0')}</span>

              <div className="eventImageContainer">
                <img src={blog.cardImage || blog.heroImage} alt={blog.title} className="eventImage" loading="lazy" />
                <div className="eventImageOverlay" />
                <span className="eventTag">{blog.tag}</span>
              </div>

              <div className="eventContent">
                <p className="blogCardDate">{blog.date}</p>
                <h2 className="eventTitle">{blog.title}</h2>
                <p className="eventDescription">{blog.excerpt}</p>

                <div className="cardFooter">
                  <NavLink
                    to={`/cea/blog/${blog.slug}`}
                    className="knowMoreBtn"
                    aria-label={`Read ${blog.title}`}
                  >
                    <span>Read Article</span>
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

export default BlogPage;