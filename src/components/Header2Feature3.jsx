import React, { useState } from "react";
import "./Header2Feature3.css";

function Header2Feature3() {
  const [showPage, setShowPage] = useState(false);

  const handleBankingClick = () => {
    setShowPage((prevState) => !prevState);
  };

  return (
    <div className="page-container">
      <div className="section1">
        <h2>Capabilities</h2>
        <p>
          Whether you’re looking for <br /> structured finance expertise or <br />
          macroeconomic data, our proven, <br /> integrated capabilities—covering <br />
          credit, climate, ESG risk, and more <br />—help you proactively mitigate
          risk,<br /> embrace innovation, and stay agile.
        </p>
      </div>
      <div className="divider"></div>
      <div className="section2">
        <ul className="list1">
          <li onClick={handleBankingClick}>
          Credit Risk <i className="fa-solid fa-chevron-right"></i>
          </li>
          <li>
          Climate Risk <i className="fa-solid fa-arrow-right"></i>
          </li>
          <li>
          ESG Risk{" "}
            <i className="fa-solid fa-arrow-right"></i>
          </li>
          <li>
          Cyber Risk <i className="fa-solid fa-arrow-right"></i>
          </li>
          <li>
          Company Reference Data{" "}
            <i className="fa-solid fa-chevron-right"></i>
          </li>
          <li>
          Economic Data<i className="fa-solid fa-arrow-right"></i>
          </li>
          <li>
          Commercial Properties <i className="fa-solid fa-arrow-right"></i>
          </li>
          <li>
          Structured Finance <i className="fa-solid fa-arrow-right"></i>
          </li>
         
        </ul>
      </div>
      <div className="divider"></div>
      <div className="section3">
        <img
          src="https://www.moodys.com/web/en/us/v3/images/header/capabilities.jpg"
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

export default Header2Feature3;
