import React from 'react'
import productImage from "../assets/bg2.png";
import "./Doxtract.css"
const Doxtract = () => {
  return (
    <section className="product-section3">
      
   

    <div className="product-content3">
      <div className="product-text">
        <span className="product-tag">Doxtract</span>
        <h2>Extract, Validate, and Process Documents with Ease</h2>

        <div className="product-features">
          <h4>Features:</h4>
          <ul>
            <li>OCR and NLP-based data extraction.</li>
            <li>Handles unstructured documents across industries.</li>
            <li>Validates fields using external data sources.</li>
          </ul>
        </div>

        <div className="product-benefits">
          <h4>Benefits:</h4>
          <ul>
            <li>Process 10,000+ documents in minutes.</li>
            <li>Achieve 99% data accuracy with AI-driven validation.</li>
          </ul>
        </div>

        <div className="product-buttons">
          <button className="learn-btn">Learn More</button>
          <button className="demo-btn">Schedule a Demo</button>
        </div>
      </div>

      <div className="product-image">
        <img src={productImage} alt="Product" />
      </div>
    </div>
  </section>
  )
}

export default Doxtract