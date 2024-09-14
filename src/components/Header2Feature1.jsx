// import React from "react";
// import "./Header2Feature1.css";

// function Header2Feature1() {
//   return (
//     <div className="page-container">
//       <div className=" section1">
//         <h2>Who We <br /> Serve</h2>
//         <p>
//           We cover clients in a range of <br />sectors from banking, buy-side, and <br />
//           insurance to corporations and <br />public sector organizations. <br /> Whatever
//           your needs, we have the <br /> insights, capabilities, and tools to <br /> help you
//           achieve your goals.
//         </p>
//       </div>
//       <div className="divider"></div>
//       <div className=" section2">
//         <ul className="list1">
//           <li>Banking <i class="fa-solid fa-chevron-right"></i></li>
//           <li>Buy-side <i class="fa-solid fa-arrow-right"></i></li>
//           <li>Insurance <i class="fa-solid fa-arrow-right"></i></li>
//           <li>Corporations <i class="fa-solid fa-arrow-right"></i></li>
//           <li>Public Sector <i class="fa-solid fa-chevron-right"></i></li>
//         </ul>
//       </div>
//       <div className="divider"></div>
//       <div className=" section3">
//         <img
//           src="https://www.moodys.com/web/en/us/v3/images/header/sectors.jpg"
//           alt="Section 3"
//         />
//       </div>
//     </div>
//   );
// }

// export default Header2Feature1;



import React, { useState } from "react";
import "./Header2Feature1.css";

function Header2Feature1() {
  const [showPage, setShowPage] = useState(false);

  const handleBankingClick = () => {
    setShowPage(prevState => !prevState);
  };

  return (
    <div className="page-container">
      <div className="section1">
        <h2>Who We <br /> Serve</h2>
        <p>
          We cover clients in a range of <br />sectors from banking, buy-side, and <br />
          insurance to corporations and <br />public sector organizations. <br /> Whatever
          your needs, we have the <br /> insights, capabilities, and tools to <br /> help you
          achieve your goals.
        </p>
      </div>
      <div className="divider"></div>
      <div className="section2">
        <ul className="list1">
          <li onClick={handleBankingClick}>Banking <i className="fa-solid fa-chevron-right"></i></li>
          <li>Buy-side <i className="fa-solid fa-arrow-right"></i></li>
          <li>Insurance <i className="fa-solid fa-arrow-right"></i></li>
          <li>Corporations <i className="fa-solid fa-arrow-right"></i></li>
          <li>Public Sector <i className="fa-solid fa-chevron-right"></i></li>
        </ul>
      </div>
      <div className="divider"></div>
      <div className="section3">
        <img
          src="https://www.moodys.com/web/en/us/v3/images/header/sectors.jpg"
          alt="Section 3"
          className={showPage ? "img-shrink" : ""}
        />
        {showPage && (
          <div className="new-page">
            <ul className="Banking">
              <li>Banking Overview <i className="fa-solid fa-arrow-right"></i></li>
              <li>Learning Solutions <i className="fa-solid fa-arrow-right"></i></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header2Feature1;
