import React from "react";
import "./ProductCard.css";
import productImage from "../assets/Product.png";

const ProductCard = () => {
  return (
    <section className="product-section">
      
      <div className="section-heading">
      <div className="section-subtitle">features and benefits.</div>
      <div className="section-title">Our Products</div>
      </div>

      <div className="product-content">
        <div className="product-text">
          <span className="product-tag">DocSim</span>
          <h2>AI-Powered Document Similarity Engine</h2>

          <div className="product-features">
            <h4>Features:</h4>
            <ul>
              <li>Detects near-duplicates and tampered documents.</li>
              <li>Identifies fraudulent patterns across large repositories.</li>
              <li>Multi-language support for global adaptability.</li>
            </ul>
          </div>

          <div className="product-benefits">
            <h4>Benefits:</h4>
            <ul>
              <li>Save 30% time on manual checks.</li>
              <li>Reduce document fraud by up to 40%.</li>
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
  );
};

export default ProductCard;
