import React from "react";
import "./projects.css";
import { Link } from "react-router-dom";

// --- KEEPING ORIGINAL DATA ---
const blogs = [
  {
    id: 1,
    image: "/images/student1.jpg",
    name: "Aditi Sharma",
    heading: "My Internship Experience at ABC Corp",
    content:
      "During my internship at ABC Corp, I learned about real-world applications of civil engineering concepts. I gained hands-on experience with site planning and project management...",
  },
  {
    id: 2,
    image: "/images/student2.jpg",
    name: "Rahul Verma",
    heading: "From Campus to Industry",
    content:
      "The internship exposed me to industrial practices and teamwork. It helped me understand the importance of communication and collaboration in large projects...",
  },
  {
    id: 3,
    image: "/images/student3.jpg",
    name: "Priya Nair",
    heading: "Learning Through Challenges",
    content:
      "This internship was a stepping stone in my career. I faced several challenges but overcame them with guidance from mentors, improving my problem-solving skills...",
  },
];

const eventBlog = [
  {
    id: "cea/esports",
    image: "/cea/images/esportsblog.jpg",
    name: "Nitesh Patel",
    heading: "Inter-IIT Esports Tournament 2025-26",
    content:
      "The digital arena came alive as the Civil Engineering Association (CEA) of IIT Bombay successfully hosted the inaugural Inter-IIT Civil Departments eSports Tournament...",
  },
  {
    id: 2,
    image: "/images/student2.jpg", // Assuming reusing images based on your snippet
    name: "Rahul Verma",
    heading: "Industrial Visit Insights",
    content:
      "The recent industrial visit provided practical exposure to construction methodologies. Understanding the on-site challenges helped bridge the gap between theory and practice...",
  },
  {
    id: 3,
    image: "/images/student3.jpg", // Assuming reusing images based on your snippet
    name: "Priya Nair",
    heading: "CEA Workshop Key Takeaways",
    content:
      "Participating in the recent workshop on sustainable materials was enlightening. It opened up new perspectives on eco-friendly construction techniques...",
  },
  {
    id: 4,
    image: "/cea/images/invconvo25.jpg",
    name: "Nitesh Patel",
    heading: "63rd Convocation [ class of 2025 ]",
    content:
      "The Convocation Ceremony 2025–26 of the Civil Engineering Department, IIT Bombay, celebrates the achievements of our graduating students as they embark on their professional journeys.",
  },
];
// ---------------------------

const Project = () => {
  return (
    <div className="blog-page-wrapper">
      {/* Header Section mirroring the design image */}
      <div className="neon-header-section">
          {/* Placeholder for the cityscape graphic. Replace with actual image if available */}
          <div className="cityscape-graphic-placeholder"></div>
          
          <div className="header-text-content">
            <h1 className="main-blog-title">
                OUR LATEST <span className="highlight">BLOGS</span>
            </h1>
            <h3 className="main-blog-subtitle">
              Exploring Innovations in Civil Engineering
            </h3>
          </div>
      </div>


      <div className="blog-main-content">
        {/* Section 1: Internship Blogs */}
        <h2 className="section-title">Internship Preparation Blogs</h2>
        <div className="blog-grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="neon-blog-card">
              <div className="blog-image-container">
                 <img src={blog.image} alt={blog.name} className="blog-image" />
              </div>
              <div className="blog-content">
                <h3 className="blog-heading">{blog.heading}</h3>
                <p className="blog-text">{blog.content}</p>
                
                {/* Author section styled like the target image */}
                <div className="blog-author-section">
                    {/* Placeholder avatar circle */}
                    <div className="author-avatar-placeholder"></div> 
                    <div className="author-info">
                        <p className="blog-author-name">Author: {blog.name}</p>
                        {/* Placeholder date as it wasn't in original data */}
                        <p className="blog-date">May 12, 2023</p> 
                    </div>
                </div>

                <Link to={`/blog/${blog.id}`} className="neon-read-more-btn">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="neon-divider"></div>

        {/* Section 2: Event Blogs */}
        <h2 className="section-title">Event Blogs</h2>
        <div className="blog-grid">
          {eventBlog.map((blog) => (
            <div key={blog.id} className="neon-blog-card">
               <div className="blog-image-container">
                  <img src={blog.image} alt={blog.name} className="blog-image" />
               </div>
              <div className="blog-content">
                <h3 className="blog-heading">{blog.heading}</h3>
                <p className="blog-text">{blog.content}</p>
                 {/* Author section styled like the target image */}
                 <div className="blog-author-section">
                    <div className="author-avatar-placeholder"></div>
                    <div className="author-info">
                        <p className="blog-author-name">Author: {blog.name}</p>
                         {/* Placeholder date */}
                        <p className="blog-date">July 14, 2023</p>
                    </div>
                </div>
                <Link to={`/${blog.id}`} className="neon-read-more-btn">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More Button from design image */}
        <div className="load-more-container">
            <button className="load-more-btn">Load More Blogs</button>
        </div>

      </div>
    </div>
  );
};

export default Project;