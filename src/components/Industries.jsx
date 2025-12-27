import React from "react";
import "./Industries.css";

import insuranceIcon from "../assets/Insurance_Icon.png";
import lendingIcon from "../assets/Lending_Icon.png";
import healthcareIcon from "../assets/Healthcare_Icon.png";

const IndustriesCards = () => {
  return (
    <section className="industries-bg-section">
      
      <div className="industry-card insurance">
        <div className="icon">
          <img src={insuranceIcon} alt="Insurance" />
        </div>
        <h3>Insurance</h3>
        <p>
          Automate claims processing with accurate document validation.
        </p>
      </div>

      <div className="industry-card lending">
        <div className="icon">
          <img src={lendingIcon} alt="Lending" />
        </div>
        <h3>Lending</h3>
        <p>
          Ensure faster loan approvals with fraud detection and instant verification.
        </p>
      </div>

      <div className="industry-card healthcare">
        <div className="icon">
          <img src={healthcareIcon} alt="Healthcare" />
        </div>
        <h3>Healthcare</h3>
        <p>
          Streamline patient record management and ensure compliance with HIPAA standards.
        </p>
      </div>

    </section>
  );
};

export default IndustriesCards;
