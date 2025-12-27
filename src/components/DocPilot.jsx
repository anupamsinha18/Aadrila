import React from 'react'
import "./DocPilot.css"
import productImage from "../assets/bg2.png";

const DocPilot = () => {
  return (
    <>   
     <section className="product-section1">
    <div className="product-content-new">
    <div className="product-image">
        <img src={productImage} alt="Product" />
      </div>
      <div className="product-text">
        <span className="product-tag">DocPilot</span>
        <h2>Streamline Document Workflows with Automation</h2>

        <div className="product-features">
          <h4>Features:</h4>
          <ul>
            <li>Automates document collection, routing, and task assignments.</li>
            <li>Real-time tracking with advanced dashboards.</li>
            <li>Seamless integration with enterprise systems via APIs.</li>
          </ul>
        </div>

        <div className="product-benefits">
          <h4>Benefits:</h4>
          <ul>
            <li>Reduce turnaround times by 50%.</li>
            <li>Improve operational efficiency with minimal manual effort.</li>
          </ul>
        </div>

        <div className="product-buttons">
          <button className="learn-btn">Learn More</button>
          <button className="demo-btn">Schedule a Demo</button>
        </div>
      </div>

      
    </div>
  </section>    
  </>

  )
}

export default DocPilot