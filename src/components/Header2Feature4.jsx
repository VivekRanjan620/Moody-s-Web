import React, { useState } from "react";
import "./Header2Feature4.css";

function Header2Feature4() {
  const [showPage, setShowPage] = useState(false);

  const handleBankingClick = () => {
    setShowPage((prevState) => !prevState);
  };

  return (
    <div className="page-container">
      <div className="section1">
        <h2>Insights</h2>
        <p>
          Our latest research and insights on <br />
          interconnected risk.
        </p>
        <p className="small-size">FEATURED TOPICS</p>
        <div class="button-container">
          <div class="button-row1">
            <button>Exponential Risk</button>
            <button>Private Credit</button>
          </div>
          <div class="button-row2">
            <button> Digital Transformation</button>
            <button>AI & Compliance</button>
            <button>Anti-financial Crime</button>
            <button>Commercial Real Estate</button>
          </div>
          <button class="last-button">Explore our Insights Hub</button>
        </div>
      </div>
      <div className="divider"></div>
      <div className="section2">
        <ul className="list1">
            <li style={{fontSize:'14px'}}>INSIGHTS BY KEY RISK AREA</li>
          <li onClick={handleBankingClick}>
            Credit Risk <i className="fa-solid fa-chevron-right"></i>
          </li>
          <li>
          Compliance & Third-Party Risk <i className="fa-solid fa-arrow-right"></i>
          </li>
          <li>
          Economic Data<i className="fa-solid fa-arrow-right"></i>
          </li>
          <li>
          ESG Risk <i className="fa-solid fa-arrow-right"></i>
          </li>
          <li>
          Climate Risk<i className="fa-solid fa-chevron-right"></i>
          </li>
          <li style={{fontSize:'14px'}}>ALL INSIGHTS</li>
          <li>
          View all Insights<i className="fa-solid fa-arrow-right"></i>
          </li>
          
        </ul>
      </div>
      <div className="divider"></div>
      <div className="section3">
        <img
          src="https://moodys.com/web/en/us/v3/images/header/insights.jpg"
          alt="Section 3"
          className={showPage ? "img-shrink" : ""}
        />
        {showPage && (
          <div className="new-page">
            <ul className="Banking">
              <li>
                Banking Overview <i className="fa-solid fa-arrow-right"></i>
              </li>
              <li>
                Learning Solutions <i className="fa-solid fa-arrow-right"></i>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header2Feature4;
