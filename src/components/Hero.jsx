import React, { useState } from "react";
import "./Hero.css";

import logo from "../assets/logo.png";
import bg from "../assets/hero-bg.png";
import docImage1 from "../assets/License.png";
import docImage2 from "../assets/Doc.png";
import docImage3 from "../assets/Invocie.png";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="hero-section-full">
      <img src={bg} className="bg-img" alt="background-lines" />

      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Aadrila Logo" className="logo-icon" />
        </div>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">Industries</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">About Us</a></li>

          <li className="mobile-cta">
            <button className="btn-demo">Get a Demo</button>
          </li>
        </ul>

        <div className="cta-section">
          <button className="btn-demo">Get a Demo</button>
        </div>
      </nav>

      <section className="hero-container">
        <div className="hero-content">
          <div className="hero-text-section">
            <div className="hero-subtitle">AI-Powered</div>
            <div className="hero-title">
              Document Automation <br /> & Fraud Detection
            </div>
            <div className="hero-description">
              Enhance security, accuracy, and efficiency with our cutting-edge AI
              solutions for seamless document processing and fraud prevention.
            </div>

            <div className="hero-buttons">
              <button className="btn btn-primary">Get a Demo</button>
              <button className="btn btn-secondary">Explore Solutions</button>
            </div>
          </div>

          <div className="hero-visual-section">
            <div className="floating-cards-wrapper">
              <img src={docImage2} className="card card-left" alt="Doc" />
              <img src={docImage3} className="card card-right" alt="Invoice" />
              <img src={docImage1} className="card card-main" alt="License" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
