import React, { useState } from 'react';
import { Image as ImageIcon, Hash } from 'lucide-react';
import './gallery.css';

const galleryData = {
  '2025-26': {
    UG_Orientation: [
      '/cea/images/25_oreo_1_ug.jpg',
      '/cea/images/25_oreo_2_ug.jpg',
      '/cea/images/25_oreo_ug_3.jpg',
    ],
    PG_Orientation: [
      '/cea/images/25_o_1.jpg',
      '/cea/images/25_o_2.jpg',
      '/cea/images/25_o_3.jpg',
      '/cea/images/25_o_4.jpg',
    ],
    Civil_Arena: [
      '/cea/images/ca_1_25.jpg',
      '/cea/images/ca_2_25.jpg',
      '/cea/images/ca_5_25.jpg',
      '/cea/images/ca_6_25.jpg',
      '/cea/images/ca_3_25.jpg',
      '/cea/images/ca_4_25.jpg',
    ],
    Convocation: [
      '/cea/images/convo_1_25.JPG',
      '/cea/images/convo_2_25.JPG',
      '/cea/images/convo_3_25.JPG',
      '/cea/images/convo_4_25.JPG',
    ],
    Teacher_Day: [
      '/cea/images/td_1_25.jpg',
      '/cea/images/td_2_25.jpg',
      '/cea/images/td_3_25.jpg',
      '/cea/images/td_4_25.jpg',
    ],
  },
  '2024-25': {
    Orientation: [
      '/cea/images/5_o_1.jpg',
      '/cea/images/5_o_2.jpg',
      '/cea/images/5_o_3.jpg',
      '/cea/images/5_o_4.jpg',
    ],
    Convocation: [
      '/cea/images/5_co_1.jpg',
      '/cea/images/5_co_2.jpg',
      '/cea/images/5_co_3.jpg',
    ]
  },
  '2023-24': {
    Department_Trip: [
      '/cea/images/4_dt_1.jpeg',
      '/cea/images/4_dt_2.jpeg',
      '/cea/images/4_dt_3.jpeg',
      '/cea/images/4_dt_4.jpeg',
    ],
    Orientation: [
      '/cea/images/4_o_1.jpg',
      '/cea/images/4_o_2.jpg',
      '/cea/images/4_o_3.jpg',
      '/cea/images/4_o_4.jpg',
    ],
    Convocation: [
      '/cea/images/4_co_1.jpg',
      '/cea/images/4_co_2.jpg',
      '/cea/images/4_co_3.jpg',
      '/cea/images/4_co_4.jpg',
    ],
    Teacher_Day: [
      '/cea/images/4_te_1.jpeg',
      '/cea/images/4_te_2.jpeg',
      '/cea/images/4_te_3.jpeg',
    ],
    Traditional_Day: [
      '/cea/images/4_td_1.jpg',
      '/cea/images/4_td_2.jpg',
      '/cea/images/4_td_3.jpg',
      '/cea/images/4_td_4.jpg',
    ],
  },
  '2022-23': {
    Valedictory_Function: [
      '/cea/images/3_v_1.jpg',
      '/cea/images/3_v_2.jpg',
      '/cea/images/3_v_3.jpg',
      '/cea/images/3_V_4.jpg',
    ],
    Civiesta: [
      '/cea/images/3_c_1.jpg',
      '/cea/images/3_c_2.jpg',
      '/cea/images/3_c_3.jpg',
      '/cea/images/3_c_4.jpg',
    ],
    Civil_Cafe_Inaugration: [
      '/cea/images/3_cc_1.jpeg',
      '/cea/images/3_cc_2.jpeg',
      '/cea/images/3_cc_3.jpeg',
      '/cea/images/3_cc_$.jpeg',
    ],
    Traditional_Day: [
      '/cea/images/3_t_1.jpeg',
      '/cea/images/3_t_2.jpeg',
      '/cea/images/3_t_3.jpeg',
      '/cea/images/3_t_4.jpeg',
    ],
    Fresher_Orientation: [
      '/cea/images/3_f_1.jpeg',
      '/cea/images/3_f_2.jpeg',
      '/cea/images/3_f_3.jpeg'
    ],
    Bowling_Arcade_Fest: [
      '/cea/images/3_b_1.jpeg',
      '/cea/images/3_b_2.jpeg',
      '/cea/images/3_b_3.jpeg',
      '/cea/images/3_b_4.jpeg'
    ],
    PG_Orientation: [
      '/cea/images/3_p_1.jpeg',
      '/cea/images/3_p_2.jpeg',
      '/cea/images/3_p_3.jpeg',
      '/cea/images/3_p_4.jpeg'
    ],
    Teachers_Day: [
      '/cea/images/3_te_1.jpeg',
      '/cea/images/3_te_2.jpeg',
      '/cea/images/3_te_3.jpeg',
      '/cea/images/3_te_4.jpeg',
    ],
    Department_Trip: [
      '/cea/images/3_dt_1.jpeg',
      '/cea/images/3_dt_2.jpg',
      '/cea/images/3_dt_3.jpg',
      '/cea/images/3_dt_4.jpg',
    ],
    Convocation: [
      '/cea/images/3_co_1.jpeg',
      '/cea/images/3_co_2.jpeg',
      '/cea/images/3_co_3.jpeg',
      '/cea/images/3_co_4.jpeg',
    ],
    Reunion_Convocation: [
      '/cea/images/3_re_1.jpeg',
      '/cea/images/3_re_2.jpeg',
      '/cea/images/3_re_3.jpeg',
      '/cea/images/3_re_4.jpeg',
    ],
    Seminar_for_Durability_of_Structures: [
      '/cea/images/3_se_1.jpeg',
      '/cea/images/3_se_2.jpeg',
      '/cea/images/3_se_3.jpeg',
      '/cea/images/3_se_4.jpeg',
    ],
    Open_House: [
      '/cea/images/3_o_1.jpeg',
      '/cea/images/3_o_2.jpeg',
      '/cea/images/3_o_3.jpeg',
      '/cea/images/3_o_4.jpeg',
    ],
  },
};

const Gallery = () => {
  const [selectedYear, setSelectedYear] = useState('2025-26');
  const [lightbox, setLightbox] = useState(null);

  // Helper to remove underscores for display
  const formatTitle = (text) => text.replace(/_/g, ' ');

  return (
    <div className="gallery-container">
      {/* Background Grid */}
      <div className="bgGrid" />

      <div className="gallery-content-wrapper">
        {/* Header */}
        <header className="gallery-header">
           <h1 className="gallery-title">
             CEA <span className="neon-cyan">Gallery</span>
           </h1>
           <div className="tech-divider"></div>
           <p className="gallery-subtitle">
            Moments and memories from {selectedYear}
           </p>
        </header>

        {/* Year Selector (Cyber Tabs) */}
        <div className="year-selector">
          {Object.keys(galleryData).map((year) => (
            <button
              key={year}
              className={`year-btn ${year === selectedYear ? 'active' : ''}`}
              onClick={() => setSelectedYear(year)}
            >
              <span className="btn-content">{year}</span>
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="events-wrapper">
          {Object.entries(galleryData[selectedYear]).map(([event, images]) => (
            <section key={event} className="event-section-genz">
              
              {/* GenZ Header Design */}
              <div className="event-header-cyber">
                <div className="header-decoration"></div>
                <h2 className="event-title-cyber">
                  <Hash size={24} className="hash-icon" />
                  {formatTitle(event)}
                </h2>
                <div className="header-line"></div>
              </div>
              
              {/* Image Grid */}
              <div className="event-images-grid">
                {images.map((src, index) => (
                  <div
                    key={index}
                    className="cyber-image-card"
                    onClick={() => setLightbox(src)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter') setLightbox(src); }}
                  >
                    <img 
                      src={src} 
                      alt={`${event} ${index + 1}`} 
                      className="event-img" 
                      loading="lazy"
                      onError={(e) => {e.target.src = 'https://via.placeholder.com/400x300?text=Photo+unavailable'}}
                    />
                    <div className="scan-line"></div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="gallery-lightbox" onClick={() => setLightbox(null)}>
          <button
            className="lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Close image"
          >
            &times;
          </button>
          <img
            src={lightbox}
            alt="Enlarged gallery"
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;