import React from 'react';
import { Mail, Phone, GraduationCap } from 'lucide-react';
import './council.css';

const Council = () => {

  // --- DATA SECTIONS ---
  const hodData = [
    {
      image: "/cea/images/hod.jpeg",
      name: "Prof. Tom V Mathew",
      mobile: "+91-22-2576-7349",
      email: "hod@civil.iitb.ac.in",
      role: "Head of Department",
      desc: "Transportation Systems Engineering, Department of Civil Engineering"
    }
  ];

  const facultyData = [
    {
      image: "/cea/images/solomon.jpeg",
      name: "Prof. Solomon Debbarma",
      mobile: "+91-22-2576-7131",
      email: "sdebbarma@civil.iitb.ac.in",
      role: "Assistant Professor",
      desc: "Transportation Systems Engineering, Civil Engineering"
    },
    {
      image: "/cea/images/ashish.jpeg",
      name: "Prof. Ashish Pal",
      mobile: "+91-22-2576-7301",
      email: "ashish.pal@civil.iitb.ac.in",
      role: "Assistant Professor",
      desc: "Structural Engineering, Department of Civil Engineering"
    },
    {
      image: "/cea/images/eswar.jpeg",
      name: "Prof. Eswar Rajasekaran",
      mobile: "+91-22-2576-7325",
      email: "eswar.r@civil.iitb.ac.in",
      role: "Associate Professor",
      desc: "Remote Sensing, Department of Civil Engineering"
    }
  ];

  const gSecData = [
    {
      image: "/cea/images/gursheel.jpeg",
      name: "Gursheel Singh",
      mobile: "+91 9815142579",
      email: "23b0715@iitb.ac.in",
      role: "Department General Secretary",
      desc: "Civil Engineering, 2027 Batch"
    }
  ];

  const jointSecData = [
    {
      image: "/cea/images/vedant.jpg",
      name: "Vedant Patel",
      mobile: "+91 8689871099",
      email: "24b0661@iitb.ac.in",
      role: "Joint Secretary Events",
      desc: "Civil Engineering, 2028 Batch"
    },
    {
      image: "/cea/images/sarthak.jpg",
      name: "Sarthak Kastiya ",
      mobile: "+91 9926967455",
      email: "sarthak.kastiya@iitb.ac.in",
      role: "Joint Secretary Academics",
      desc: "Civil Engineering, 2028 Batch"
    }
  ];

  const chiefEditorData = [
    {
      image: "/cea/images/pari.jpeg",
      name: "Stuti Agrawal",
      mobile: "+91 9770481000",
      email: "24b0738@iitb.ac.in",
      role: "Chief Editor",
      desc: "Civil Engineering, 2028 Batch"
    }
  ];

  const pgCouncilData = [
    {
      image: "/cea/images/venkatesh.png",
      name: "Venkatesh Vijay Dahale ",
      mobile: "+91 8888929741",
      email: "25m0607@iitb.ac.in",
      role: "PG Representative",
      desc: ""
    },
    // {
    //   image: "/cea/images/Pavan.jpg",
    //   name: "K Pavan",
    //   mobile: "+91 7995858585",
    //   email: "24m0594@iitb.ac.in",
    //   role: "PG Sports Representative",
    //   desc: "Structural Engineering"
    // },
    // {
    //   image: "/cea/images/digvijay.jpg",
    //   name: "Digvijay Singh",
    //   mobile: "+91 8519023503",
    //   email: "24m0576@iitb.ac.in",
    //   role: "PG Cultural Representative",
    //   desc: "Water Resource Engineering"
    // },
    // {
    //   image: "/cea/images/ritin.jpg",
    //   name: "Ritin Penha",
    //   mobile: "+91 7906944367",
    //   email: "24m0621@iitb.ac.in",
    //   role: "M. Tech Representative",
    //   desc: "Construction Technology and Management"
    // },
  ];

  const ugCouncilData = [
    {
      image: "/cea/images/chiragk.jpg",
      name: "Chirag kejriwal",
      mobile: "+91 9256940604",
      email: "25b0665@iitb.ac.in",
      role: "Associate Secretary",
      desc: "Civil Engineering, 2029 Batch"
    },
    {
      image: "/cea/images/karan.jpg",
      name: "Karan Pilania",
      mobile: "+91 9997349607",
      email: "25B0650@iitb.ac.in",
      role: "Associate Secretary",
      desc: "Civil Engineering, 2029 Batch"
    },
    {
      image: "/cea/images/adityakiran.jpg",
      name: "Aditya Kiran Parasa",
      mobile: "+91 7827725715",
      email: "25B0743@iitb.ac.in",
      role: "Web Secretary",
      desc: "Civil Engineering, 2029 Batch"
    },
    {
      image: "/cea/images/adityaaryan.jpeg",
      name: "Aditya Aryan Choubey ",
      mobile: "+91 6200986950",
      email: "25b0732@iitb.ac.in",
      role: "Sports Secretary",
      desc: "Civil Engineering, 2029 Batch"
    },
    {
      image: "/cea/images/pranav.jpg",
      name: "Pranav Malik",
      mobile: "+91 9414430568",
      email: "25b0662@iitb.ac.in",
      role: "Design and Media Secretary",
      desc: "Civil Engineering, 2029 Batch"
    },
    {
      image: "/cea/images/bhavya.jpeg",
      name: "Bhavya",
      mobile: "+91 9050345503",
      email: "25b0709@iitb.ac.in",
      role: "Design and Media Secretary",
      desc: "Civil Engineering, 2029 Batch"
    },
    {
      image: "/cea/images/jasmeen.jpeg",
      name: "Jasmeen Patel",
      mobile: "+91 8140791108",
      email: "25b0689@iitb.ac.in",
      role: "Design and Media Secretary",
      desc: "Civil Engineering, 2029 Batch"
    },
    {
      image: "/cea/images/divit.jpeg",
      name: "Divit Ghorpade",
      mobile: "+91 9821252524",
      email: "25b0696@iitb.ac.in",
      role: "Marketing Secretary",
      desc: "Civil Engineering, 2029 Batch"
    },
  ];

  const alumniData = [
    {
      image: "/cea/images/akshita.jpg",
      name: "Akshita Baid",
      mobile: "+91 7665201207",
      email: "25b0702@iitb.ac.in",
      role: "Alumni Secretary",
      desc: "Civil Engineering, 2029 Batch"
    },
  ];

  const crData = [
    // {
    //   image: "/cea/images/neel.jpeg",
    //   name: "Neel Wadhwa",
    //   mobile: "+91 9926097945",
    //   email: "24b0649@iitb.ac.in",
    //   role: "CR (S1)",
    //   desc: "Civil Engineering, 2029 Batch"
    // },
    // {
    //   image: "/cea/images/soni.jpg",
    //   name: "Satwik Soni",
    //   mobile: "+91 8090397205",
    //   email: "24b0686@iitb.ac.in",
    //   role: "CR (S2)",
    //   desc: "Civil Engineering, 2029 Batch"
    // },
    // {
    //   image: "/cea/images/sarthak.jpg",
    //   name: "Sarthak Kastiya",
    //   mobile: "+91 9926967455",
    //   email: "24b0722@iitb.ac.in",
    //   role: "CR (S3)",
    //   desc: "Civil Engineering, 2029 Batch"
    // }
  ];

  const editorsData = [
    {
      image: "/cea/images/nandita.jpeg",
      name: "Nandita Chandrawat",
      mobile: "+91 9329899148",
      email: "25B0700@iitb.ac.in",
      role: "Editor",
      desc: "Department of Civil Engineering"
    },
    {
      image: "/cea/images/yashvi.jpg",
      name: "Yashvi Shah",
      mobile: "+91 8657080803",
      email: "25b0656@iitb.ac.in",
      role: "Editor",
      desc: "Department of Civil Engineering"
    },
    // {
    //   image: "/cea/images/Harshita.jpg",
    //   name: "Harshita Joshi",
    //   mobile: "+91 9509029823",
    //   email: "24b0714@iitb.ac.in",
    //   role: "Editor",
    //   desc: "Department of Civil Engineering"
    // },
  ];

  // --- COMPONENT HELPERS ---

  const MemberCard = ({ data, isLarge = false }) => (
    <div className={`council-card ${isLarge ? 'card-large' : ''}`}>
      <div className="card-image-wrapper">
        <div className="card-glow" />
        <img
          src={data.image}
          alt={data.name}
          className="card-image"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/200' }}

        />
      </div>

      <div className="card-content">
        <h3 className="member-name">{data.name}</h3>
        {/* GenZ Role Pill */}
        <div className="genz-role-wrapper">
          <span className="member-role">{data.role}</span>
        </div>

        <p className="member-desc">{data.desc}</p>

        <div className="member-contacts">
          {data.mobile && (
            <a href={`tel:${data.mobile}`} className="contact-link">
              <Phone size={14} /> <span>{data.mobile}</span>
            </a>
          )}
          {data.email && (
            <a href={`mailto:${data.email}`} className="contact-link">
              <Mail size={14} /> <span>{data.email}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  const Section = ({ title, data, isSingle = false }) => (
    <section className="council-section">
      <div className="heading-wrapper">
        <h2 className="section-heading">{title}</h2>
      </div>
      <div className={`council-grid ${isSingle ? 'grid-single' : ''}`}>
        {data.map((member, index) => (
          <MemberCard key={index} data={member} isLarge={isSingle} />
        ))}
      </div>
    </section>
  );

  return (
    <div className="council-page-wrapper">
      <div className="bgGrid" />

      <div className="council-container">
        {/* Header */}
        <header className="council-header">
          <h1 className="page-title">
            CEA <span className="gradient-text">Council</span>
          </h1>
          <p className="page-subtitle">
            2026-27
          </p>
        </header>

        {/* Administration */}
        <Section title="Head of Department" data={hodData} isSingle={true} className="sec-title" />
        {/* <h2 className="sec-title" data={hodData} isSingle={true} >Head of Department</h2> */}

        <div className="section-divider" />

        <Section title="Faculty Advisors" data={facultyData} className="sec-title" />
        <div className="section-divider" />

        {/* Core Council */}
        <Section title="Department General Secretary" data={gSecData} isSingle={true} className="sec-title" />
        <Section title="Joint Secretaries" data={jointSecData} className="sec-title" />
        <Section title="Chief Editor" data={chiefEditorData} isSingle={true} className="sec-title" />
        <div className="section-divider" />

        {/* Teams */}
        <Section title="PG Council Member" data={pgCouncilData} className="sec-title" />
        <Section title="UG Council Members" data={ugCouncilData} className="sec-title" />
        <Section title="Editors" data={editorsData} className="sec-title" />
        <Section title="Alumni Secretary" data={alumniData} isSingle={true} className="sec-title" />
        {/* <Section title="Class Representatives" data={crData} className="sec-title" /> */}

      </div>
    </div>
  );
};

export default Council;