import React, { useState } from "react";
import "./Header2Feature6.css";

function Header2Feature6() {
  const [showPage, setShowPage] = useState(false);

  const handleBankingClick = () => {
    setShowPage((prevState) => !prevState);
  };

  return (
    <div className="page-container">
      <div className="section1-cont">
        <h2>Support</h2>
        <p>
          Need more information or can’t find <br />
          what you’re looking for? We’re here <br /> to help. Connect with us
          anytime, <br />
          anywhere.
        </p>
        <div className="sec-sup">
        <ul className="list1">
        <li>
        Help & Support <i className="fa-solid fa-arrow-right"></i>
          </li>
          <li>
          Contact Us<i className="fa-solid fa-arrow-right"></i>
          </li>
          <li>
          FAQ <i className="fa-solid fa-arrow-right"></i>
          </li>
        </ul>
        </div>
      </div>
      
      <div className="section6-img">
        <img
          src="https://www.moodys.com/web/en/us/v3/images/header/support.jpg"
          alt="Section 3"
          className={showPage ? "img-shrink" : ""}
        />
        
      </div>
    </div>
  );
}

export default Header2Feature6;
