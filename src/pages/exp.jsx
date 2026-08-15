import React from 'react';
import {
  UserPlus, Landmark, Palette, Globe,
  MapPin, Clock, ArrowRight, Users, Target, Lightbulb
} from 'lucide-react';
import './exp.css';
import { useNavigate } from 'react-router-dom';

const Exp = () => {

  const navigate = useNavigate();

  // Data for Events Section
  const events = [
    {
      day: "4",
      month: "July",
      title: "Inter-IIT Esports Event",
      desc: "Highlights: BGMI Tournament, Valorant Tournament, CLASH ROYALE",
      loc: "ONLINE",
      time: "CLOSED"
    },
    {
      day: "21",
      month: "July",
      title: "Freshers Orientation",
      desc: "Highlights: Welcome speech by HOD, Ice-breaking sessions, Registration",
      loc: "LHC",
      time: "9:00 AM"
    },
    {
      day: "1",
      month: "JULY",
      title: "Summer of Core",
      desc: "Highlights: Learn Solidworks, ETABS, Microsoft office from experts",
      loc: "ONLINE",
      time: "CLOSED"
    }
  ];

  // Data for Council Section - Left Features
  const councilFeatures = [
    {
      icon: <Users size={24} color="#a855f7" />,
      title: "HOD & Faculty Advisors",
      desc: "Experienced Faculties driving our vision forward"
    },
    {
      icon: <Target size={24} color="#ec4899" />,
      title: "Strategic Planning",
      desc: "Organizing impactful events and initiatives"
    },
    {
      icon: <Lightbulb size={24} color="#eab308" />,
      title: "Innovation",
      desc: "Bringing fresh ideas to the civil engineering community"
    }
  ];

  // Data for Council Section - Right Grid
  const councilGrid = [
    { initials: "GS", title: "Gen. Secretary", role: "Gursheel Singh" },
    { initials: "JSE", title: "Joint Secretary Events", role: "Vedant Patel" },
    { initials: "JSA", title: "Joint Secretary Academics", role: "Sarthak Kastiya" },
    { initials: "CE", title: "Chief Editor", role: "Stuti Agrawal" },
  ];

  return (
    <div className="appContainer">

      {/* Hero Section */}
      <main className="heroSection">

        {/* Left Content */}
        <div className="heroContent">
          <h1 className="heroTitle">
            Civil Engineering <br />
            <span className="gradientText">Association, </span><br />
            <span className="gradientText">IIT Bombay</span>
          </h1>
          <p className="heroDescription">
            The Civil Engineering Association (CEA) at IIT Bombay was established with the primary goal of disseminating knowledge and addressing industrial issues by bringing corporates, professors, and students together.
          </p>

          {/* Stats Grid */}
          <div className="statsGrid">
            <div className="statItem">
              <div className="statNumber">1K+</div>
              <div className="statLabel">Students</div>
            </div>
            <div className="statItem">
              <div className="statNumber">50+</div>
              <div className="statLabel">Profs</div>
            </div>
            <div className="statItem">
              <div className="statNumber">10+</div>
              <div className="statLabel">Events</div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            className="btnRegister"
            onClick={() => window.open("https://www.linkedin.com/company/civil-engineering-association-iit-bombay/posts/?feedView=all", "_blank")}
          >
            <span className="btnIcon"><UserPlus size={20} /></span>
            Linkedin
          </button>
        </div>

        {/* Right Image/Illustration */}
        <div className="illustrationWrapper">
          <div className="glowEffect" />
          <div className="mainImageContainer">
            <img
              src='/cea/images/gemini.png'
              alt="3D Isometric Civil Engineering Illustration"
              className="heroImage"
            />
            {/* Orbs */}
            <div className="floatingOrb orb1" />
            <div className="floatingOrb orb2" />
          </div>
        </div>
      </main>

      {/* Student Bodies Section */}
      <section className="bodiesSection">
        <div className="bodiesHeader">
          <h2 className="bodiesTitle">Student Bodies</h2>
          <p className="bodiesSubtitle">
            Discover the organizations that shape the future of civil engineering at IIT Bombay
          </p>
        </div>
        <div className="bodiesGrid">
          <div className="bodyCard card-cea">
            <img
              src="/cea/images/translogo.png" /* OR use the imported variable: src={ceaLogo} */
              alt="CEA Logo"
              className="card-img"
            />
            <h3 className="cardTitle">What is CEA?</h3>
            <p className="cardDescription">
              The bridge that brings the entire Civil family together—students, faculty, and alumni. We connect dreams with guidance.
            </p>
          </div>
          <div className="bodyCard card-aakaar">
            <img
              src="/cea/images/akaar.png" /* OR use the imported variable: src={ceaLogo} */
              alt="CEA Logo"
              className="card-img"
            />
            <h3 className="cardTitle">Aakaar</h3>
            <p className="cardDescription">
              The annual festival of the Civil Engineering Department at IIT Bombay. A platform to create, innovate, and learn.
            </p>
          </div>
          <div className="bodyCard card-eeri">
            <img
              src="/cea/images/eeri.png" /* OR use the imported variable: src={ceaLogo} */
              alt="CEA Logo"
              className="card-img"
            />
            <h3 className="cardTitle">EERI</h3>
            <p className="cardDescription">
              Connecting professionals worldwide dedicated to reducing earthquake risk and advancing engineering practices.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="eventsSection">
        <div className="eventsContainer">
          <div className="eventsHeader">
            <div className="eventsTitleWrapper">
              <h2 className="eventsTitle">Our Events</h2>
              <p className="eventsSubtitle">Join us in our journey...</p>
            </div>
            <button className="viewAllBtn" onClick={() => navigate('/cea/events')}>
              View All <ArrowRight size={18} />
            </button>
          </div>
          <div className="eventsGrid">
            {events.map((event, index) => (
              <div className="eventCard" key={index}>
                <div className="dateBadge">
                  <span className="dateDay">{event.day}</span>
                  <span className="dateMonth">{event.month}</span>
                </div>
                <div className="eventInfo">
                  <h3 className="eventTitle">{event.title}</h3>
                  <p className="eventDesc">{event.desc}</p>
                  <div className="eventMeta">
                    <div className="metaItem"><MapPin size={14} className="metaIcon" /><span>{event.loc}</span></div>
                    <div className="metaItem"><Clock size={14} className="metaIcon" /><span>{event.time}</span></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Council Section */}
      <section className="councilSection">
        <div className="councilContainer">

          {/* Left Column: Info & Features */}
          <div className="councilLeftCol">
            <div className="councilHeader">
              <h2 className="councilTitle">Meet Our Council</h2>
              <p className="councilSubtitle">
                The dedicated team leading CEA's initiatives and fostering innovation.
              </p>
            </div>

            <div className="councilFeatureStack">
              {councilFeatures.map((feature, index) => (
                <div className="featureCard" key={index}>
                  <div className="featureIconBox">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="featureTitle">{feature.title}</h3>
                    <p className="featureDesc">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="councilMainBtn" onClick={() => navigate('/cea/council')}>
              Know More <ArrowRight size={20} />
            </button>
          </div>

          {/* Right Column: Member Grid */}
          <div className="councilRightGrid">
            {councilGrid.map((member, index) => (
              <div className="memberCard" key={index}>
                <div className="memberInitials">{member.initials}</div>
                <h3 className="memberTitle">{member.title}</h3>
                <p className="memberRole">{member.role}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Background Grid Pattern */}
      <div className="bgGrid" />
    </div>
  );
};

export default Exp;