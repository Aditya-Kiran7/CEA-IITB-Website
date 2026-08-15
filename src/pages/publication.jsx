import React from 'react';
import { BookOpen, ExternalLink, FileText } from 'lucide-react';
import './publication.css';

const publications = [
  {
    id: 1,
    title: "Annual Magazine 2024",
    edition: "VOL. 06",
    description: "Moments become memories when spent with great people. We present the 6th edition of Civil Insight - Annual civil magazine, dedicated to precious gems of our Civil Engineering Department. A flashlight through all the major fun activities and events happened during the academic year 2023-24.",
    image: "/cea/images/publication.jpg", // Ensure this path is correct
    pdf: "https://drive.google.com/file/d/13v6KSz68bfsXA3QesbD16xcqHsx1w3xN/view?usp=sharing",
  },
  // Placeholder for future logic
  // {
  //   id: 2,
  //   title: "Research Digest 2023",
  //   edition: "VOL. 05",
  //   description: "Highlights of top research papers, student projects, and industrial collaborations from the past year.",
  //   image: "/images/research-2023.png",
  //   pdf: "#",
  // },
];

const Publication = () => {
  return (
    <div className="publication-container">
      {/* Background Grid Effect */}
      <div className="bgGrid"></div>

      <div className="content-wrapper">
        {/* Header Section */}
        <header className="pub-header">
           <h1 className="pub-heading">
             Our <span className="neon-text">Publications</span>
           </h1>
           <div className="header-bar"></div>
           <p className="pub-subtitle">Magazines, journals, and resources from the Civil Engineering Association</p>
        </header>

        {/* Publications List */}
        <div className="publication-list">
          {publications.map((pub) => (
            <div className="pub-card" key={pub.id}>
              
              {/* Image Section */}
              <div className="pub-image-wrapper">
                <div className="glow-effect"></div>
                <img src={pub.image} alt={pub.title} className="pub-image" />
                <div className="tech-corner"></div>
              </div>

              {/* Content Section */}
              <div className="pub-content">
                <div className="pub-meta">
                  <span className="badge-edition">{pub.edition}</span>
                  <span className="badge-type"><FileText size={12}/> MAGAZINE</span>
                </div>

                <h2 className="pub-title">{pub.title}</h2>
                <p className="pub-desc">{pub.description}</p>
                
                <div className="pub-actions">
                  <a href={pub.pdf} target="_blank" rel="noopener noreferrer" className="cyber-btn">
                    <span className="btn-content">
                      READ ISSUE <ExternalLink size={18} />
                    </span>
                    <div className="btn-glitch"></div>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="pub-coming-soon">
          <p>
            More editions of <em>Civil Insight</em> and other departmental
            publications are on the way &mdash; check back soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Publication;