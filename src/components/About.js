import React, { useState } from "react"
import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom"

export default function About() {
  const navigate = useNavigate();

  const [hoveredLang, setHoveredLang] = useState("Check out my languages");

  const handleMouseEnter = (e) => {
    const name = e.target.getAttribute("data-name");
    setHoveredLang(name || "Check out my languages");
  };

  const handleMouseLeave = () => {
    setHoveredLang("Building with technologies");
  };

  const certifications = [
    { title: "ITOL AWS Certification", file: "/itol-aws-cert.pdf" },
    { title: "ITOL Azure Certification", file: "/itol-azure-cert.pdf" },
    { title: "React Certification", file: "/react-cert.pdf" },
    { title: "Python Certification", file: "/python-cert.pdf" },
    { title: "JavaScript Certification", file: "/javascript-cert.pdf" },
    { title: "Tailwind CSS Certification", file: "/tailwind-cert.pdf" },
    { title: "GitHub Certification", file: "/github-cert.pdf" },
    { title: "HTML & Web Certification", file: "/html-and-web-cert.pdf" },
    { title: "CSS Certification", file: "/css-cert.pdf" },
    { title: "Database Certification", file: "/database-cert.pdf" },
  ];


  return (

    <>
      <Navbar />
      <div className="about-section-1">
        <span className="title">Hi... I'm Ethan!</span>
        <span className="text">Junior Cloud Engineer with hands-on experience deploying and managing production infrastructure on AWS and Microsoft Azure.</span>
        <button className="about-button" onClick={() => navigate('/contact')}>Get in touch!</button>
      </div>

      <div className="about-section-2">
        <span className="title" id="lang-text">{hoveredLang}</span>
        <div className="lang-scroller-cont">
          <div className="group">
            <img
              src='/htmlLogo.png'
              alt="HMTL"
              data-name="HTML"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <img
              src='/cssLogo.png'
              alt="CSS"
              data-name="CSS"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <img
              src='/phpLogo.png'
              alt="PHP"
              data-name="PHP"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <img
              src='/jsLogo.png'
              alt="JavaScript"
              data-name="JavaScript"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <img
              src='/reactLogo.png'
              alt="React"
              data-name="React"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <img
              src='/pythonLogo.png'
              alt="Python"
              data-name="Python"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <img
              src='/sqlLogo.png'
              alt="SQL"
              data-name="SQL"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <img
              src='/tailwindLogo.png'
              alt="Tailwind CSS"
              data-name="Tailwind CSS"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <img
              src='/nodejsLogo.png'
              alt="Nodejs"
              data-name="Nodejs"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          <div className="group">
            <img
              src='/htmlLogo.png'
              alt="HMTL"
              data-name="HTML"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <img
              src='/cssLogo.png'
              alt="CSS"
              data-name="CSS"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <img
              src='/phpLogo.png'
              alt="PHP"
              data-name="PHP"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <img
              src='/jsLogo.png'
              alt="JavaScript"
              data-name="JavaScript" onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <img
              src='/reactLogo.png'
              alt="React"
              data-name="React"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <img
              src='/pythonLogo.png'
              alt="Python"
              data-name="Python"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <img
              src='/sqlLogo.png'
              alt="SQL"
              data-name="SQL"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <img
              src='/tailwindLogo.png'
              alt="Tailwind CSS"
              data-name="Tailwind CSS"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <img
              src='/nodejsLogo.png'
              alt="Nodejs"
              data-name="Nodejs"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        </div>

        <button className="tech-cta" onClick={() => navigate('/gallery')}>
          See these technologies in action &#8594;
        </button>

        <span className="title_two">Cloud Certifications</span>
        <div className="cloud_cert_wrapper">
          <div className="frosty_tile">
            <img
              src="/aws-cloud-practitioner.png"
              alt="AWS Cloud Practitioner certification badge" />
          </div>
          <div className="frosty_tile">
            <img
              src="/azure-fundamentals.png"
              alt="Microsoft Azure Fundamentals certification badge" />
          </div>
        </div>

        <span className="title">Other Certifications</span>
        <div className="cert_list">
          {certifications.map((cert, index) => (
            <a
              key={cert.file}
              className="cert_row"
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="cert_row_number">{String(index + 1).padStart(2, '0')}</span>
              <span className="cert_row_title">{cert.title}</span>
              <span className="cert_row_link">View certificate &#8599;</span>
            </a>
          ))}
        </div>
      </div>

    </>
  )
}