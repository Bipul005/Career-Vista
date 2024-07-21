import React from "react";
import "../Admin-CSS/Footer.css"; // Assuming you have a separate CSS file for the Footer component

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-section-one">
            <h1 style={{textAlign:"center",marginLeft:"80px",fontSize:"3em"}}>Career Vista</h1>
          </div>
          

    <div class="footer-wrapper">
  <div class="footer-section-two">
    <div class="founders-section">
      <h3>Founders</h3>
      <ul>
        <li>Advait Sumiran</li>
        <li>Bipul Kumar</li>
        <li>Avinash Garg</li>
        <li>Abhinav Raj</li>
      </ul>
    </div>
  </div>
  <div className="footer-section-columns">
  <div class="founders-section-2">
          <h3>Contact Us</h3>
          <ul>
        <li>advaitsumiran@gmail.com</li>
        <li>bipulkumar96250@gmail.com</li>
        <li>avinashgarg570@gmail.com</li>
        <li>abhinavr608@gmail.com</li>
      </ul>
      </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
