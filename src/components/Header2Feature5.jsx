import React, { useState } from "react";
import "./Header2Feature5.css";
import { Link } from "react-router-dom";

function Header2Feature5() {
  const [showPage, setShowPage] = useState(false);

  // const handleBankingClick = () => {
  //   setShowPage((prevState) => !prevState);
  // };

  return (
    <div className="page-container">
      <div className="section1">
        <h2>About Us</h2>
        <p>
          Moody’s harnesses our <br /> comprehensive insights and <br />
          expertise to uncover meaning amid <br /> uncertainty so that
          individuals and <br /> organizations can thrive.
        </p>
      </div>
      <div className="divider"></div>
      <div className="section2">
        <ul className="list1">
          <li style={{ fontSize: "15px" }}>WHO WE ARE</li>
          <Link to="./AboutUs">
          <li>
            About Us <i className="fa-solid fa-chevron-right"></i>
          </li>
          </Link>
          <li>
            Media Relations <i className="fa-solid fa-arrow-right"></i>
          </li>
          <li>
            Investor Relations <i className="fa-solid fa-arrow-right"></i>
          </li>
          <li>
            Our Companies & Affiliates{" "}
            <i className="fa-solid fa-arrow-right"></i>
          </li>
          <li>
            Careers <i className="fa-solid fa-chevron-right"></i>
          </li>
          <li>
            Awards<i className="fa-solid fa-arrow-right"></i>
          </li>
          <li>
            Our Partners <i className="fa-solid fa-arrow-right"></i>
          </li>
          <li>OUR COMMITMENTS</li>
          <li>
            Sustainability <i className="fa-solid fa-arrow-right"></i>
          </li>
          <li>
            Innovation & Technology <i className="fa-solid fa-arrow-right"></i>
          </li>
          <li>
            Trust Center <i className="fa-solid fa-arrow-right"></i>
          </li>
          <li>
            Inclusion <i className="fa-solid fa-arrow-right"></i>
          </li>
          <li>
            Gender & Finance <i className="fa-solid fa-arrow-right"></i>
          </li>
          <li>
            Core <i className="fa-solid fa-arrow-right"></i>
          </li>
          <li>
            Community Impact <i className="fa-solid fa-arrow-right"></i>
          </li>
        </ul>
      </div>
      <div className="divider"></div>
      <div className="section3">
        <img
          src="https://www.moodys.com/web/en/us/v3/images/header/about-us.jpg"
          alt="Section 3"
          className={showPage ? "img-shrink" : ""}
        />
        {/* {showPage && (
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
        )} */}
      </div>
    </div>
  );
}

export default Header2Feature5;
