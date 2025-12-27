import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">

      <div className="contact-container">
        {/* LEFT */}
        <div className="contact-info">
          <h2>Contact Us</h2>

          <p className="contact-desc">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry’s.
          </p>

          <div className="contact-address">
            <div className="address-block">
              <h4>U.S. Office</h4>
              <p>
                Aadrila Technologies INC,<br />
                8 The Green, Ste R,<br />
                City of Dover County of Kent Zip Code 19901
              </p>
            </div>

            <div className="address-block">
              <h4>India Office</h4>
              <p>
                Aadrila Technologies Private Limited,<br />
                Unit 707, Lotus Trade Centre, Andheri West,<br />
                Mumbai, Maharashtra 400053
              </p>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
            </div>

            <div className="form-row">
              <input type="tel" placeholder="Phone Number" />
              <input type="text" placeholder="Company Name" />
            </div>

            <input type="text" placeholder="Inquiry Type" />
            <textarea placeholder="Message"></textarea>

            <button type="submit">Send Inquiry</button>
          </form>
        </div>
      </div>

      <footer className="contact-footer">
        <div className="footer-content">
          <p>
            © 2025 by Aadrila Technologies Private Limited CIN
            U74999UP2017PTC094688
          </p>

          <p>
            Registered Address: B-1, 127/K, Sector-K Aliganj, Lucknow,
            Uttar Pradesh, India, 226024
          </p>
        </div>
      </footer>

    </section>
  );
};

export default Contact;
