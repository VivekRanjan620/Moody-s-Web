import React, { useState } from "react";
import "./Header2Feature2.css";

function Header2Feature2() {
  const [showPage, setShowPage] = useState(false);

  const handleBankingClick = () => {
    setShowPage((prevState) => !prevState);
  };

  return (
    <div className="page-container">
      <div className="section1">
        <h2>Solutions</h2>
        <p>
          From ratings, investment research, <br /> and lending to balance sheet and <br />
          portfolio management, we offer <br /> reliable, transparent, data-driven <br />
          solutions, so that you can make <br /> informed decisions and navigate  <br />risk
          with confidence.
        </p>
      </div>
      <div className="divider"></div>
      <div className="section2">
        <ul className="list1">
          <li onClick={handleBankingClick}>
            Ratings <i className="fa-solid fa-chevron-right"></i>
          </li>
          <li>
          Investment Research <i className="fa-solid fa-arrow-right"></i>
          </li>
          <li>
          Compliance & Third-Party Risk <i className="fa-solid fa-arrow-right"></i>
          </li>
          <li>
          Lending <i className="fa-solid fa-arrow-right"></i>
          </li>
          <li>
          Financial and Regulatory Reporting <i className="fa-solid fa-chevron-right"></i>
          </li>
          <li>
          Balance Sheet Management <i className="fa-solid fa-arrow-right"></i>
          </li>
          <li>
          Capital management <i className="fa-solid fa-arrow-right"></i>
          </li>
          <li>
          Underwriting <i className="fa-solid fa-arrow-right"></i>
          </li>
          <li>
          Portfolio Management <i className="fa-solid fa-arrow-right"></i>
          </li>
        </ul>
      </div>
      <div className="divider"></div>
      <div className="section3">
        <img
          src="https://www.moodys.com/web/en/us/v3/images/header/solutions.jpg"
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

export default Header2Feature2;
