import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section get-in-touch">
          <h3>GET IN TOUCH</h3>
          <p>Speak to our team</p>
          <p>Interested in learning more about our offerings? Our solutions specialists are ready to help.</p>
          <a href="#" className="contact-link">Get in touch</a>
          <small>
            Moody’s Corporation is comprised of separate divisions. Moody's Ratings publishes credit ratings and provides assessment services on a wide range of debt obligations, programs and facilities, and the entities that issue such obligations in markets worldwide, including various corporate, financial institution, and governmental obligations, and structured finance securities. Moody's Ratings products are set out <a href="#">here</a>. All other products and solutions described on this site are provided by Moody's, a global provider of data and information, research and insights, and decision solutions.
          </small>
        </div>
        
        <div className="footer-section who-we-serve">
          <h4>Who We Serve</h4>
          <ul>
            <li>Banking</li>
            <li>Buy-side</li>
            <li>Insurance</li>
            <li>Corporations</li>
            <li>Public Sector</li>
          </ul>
        </div>

        <div className="footer-section solutions">
          <h4>Solutions</h4>
          <ul>
            <li>Ratings</li>
            <li>Investment Research</li>
            <li>Compliance & Third Party Risk</li>
            <li>Lending</li>
            <li>Financial and Regulatory Reporting</li>
            <li>Balance Sheet Management</li>
            <li>Underwriting</li>
            <li>Portfolio Management</li>
          </ul>
        </div>

        <div className="footer-section capabilities">
          <h4>Capabilities</h4>
          <ul>
            <li>Credit Risk</li>
            <li>Climate Risk</li>
            <li>ESG Risk</li>
            <li>Cyber Risk</li>
            <li>Company Reference Data</li>
            <li>Economic Data</li>
            <li>Commercial Properties</li>
            <li>Structured Finance</li>
          </ul>
        </div>

        <div className="footer-section contact-us">
          <h4>Contact Us</h4>
          <ul>
            <li>Careers</li>
            <li>Help & Support</li>
            <li>Submit a Complaint</li>
            <li>Moody's Integrity Hotline</li>
          </ul>
          <p>Via the Internet: <a href="http://Moody's.ethicspoint.com">Moody's.ethicspoint.com</a></p>
          <p>By telephone from the United States: Dial 1-866-330-MDYS (1-866-330-6397)</p>
          <p>By telephone from outside the United States: Dial the AT&T Direct Dial Access code for your location. Then at the prompt, dial 866-330-MDYS (866-330-6397)</p>
        </div>

        <div className="footer-section company-info">
          <h4>Company Information</h4>
          <ul>
            <li>About Moody's</li>
            <li>Trust Center</li>
            <li>Legal</li>
            <li>Moody's Code of Business Conduct</li>
            <li>Modern Slavery and Human Trafficking Statement</li>
            <li>Gender Pay Gap Reports</li>
            <li>Regulatory</li>
            <li>ratings.moodys.com</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Do Not Sell My Personal Information</li>
            <li>Cookies Settings</li>
          </ul>
          <small>© 2024 Moody’s Investors Service, Inc., Moody’s Analytics, Inc. and/or their affiliates and licensors. All rights reserved.</small>
        </div>

        <div className="footer-section follow-us">
          <h4>Follow Us</h4>
          <ul className="social-links">
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">YouTube</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
          <p>Note: Moody's does not post ratings to its social media accounts.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
