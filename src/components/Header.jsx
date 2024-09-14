import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../Img/logo.svg";
import assistlogo from "../Img/assist-logo.svg";
import Header2Feature6 from "./Header2Feature6";
import Header2Feature2 from "./Header2Feature2";
import Header2Feature3 from "./Header2Feature3";
import Header2Feature4 from "./Header2Feature4";
import Header2Feature5 from "./Header2Feature5";
import Header2Feature1 from "./Header2Feature1";


const Header = () => {
  const [pop, setPop] = React.useState(false);
  const [renderComponents, setRenderComponents] = React.useState("");
  const open = (e) => {
    switch (e) {
      case "serve":
        setRenderComponents(<Header2Feature1 />);
        setPop(true);
        break;
      case "solutions":
        setRenderComponents(<Header2Feature2 />);
        setPop(true);

        break;
      case "Capabilities":
        setRenderComponents(<Header2Feature3 />);
        setPop(true);
        break;
      case "Insights":
        setRenderComponents(<Header2Feature4 />);
        setPop(true);
        break;
      case "About Us":
        setRenderComponents(<Header2Feature5 />);
        setPop(true);
        break;
      case "Support":
        setRenderComponents(<Header2Feature6 />);
        setPop(true);
        break;
      default:
        setRenderComponents("");
    }

    // setPop(!pop);
  };
  return (
    <>
      <header className="header d-flex align-items-center ">
        <div className="sub-header d-flex justify-content-between align-items-center">
          <div className="logo d-flex gap-3">
            <div className="hamburger ">
              <i class="fa-solid fa-bars "></i>
            </div>
            <img src={logo} alt="Moody's" />
          </div>
          <div className="med">
          <div className="search-bar d-flex gap-3">
            <div className="search-tab d-flex justify-content-center align-items-center  gap-1  text-white  ">
              <i class="fa-solid fa-magnifying-glass mx-2"></i>
              <Link
                to="/search"
                className=" links d-flex gap-2 align-items-center"
              >
                <p className="search">Search</p>
                <p>ratings,</p>
                <p>research,</p>
                <p>analysts,</p>
                <p>and</p>
                <p>more...</p>
              </Link>
            </div>
            <div className="ra-sec ">
              <img src={assistlogo} alt="" />
              Research Assitant
            </div>
          </div>
          </div>

          <button className="sign-in">Sign In</button>
        </div>
      </header>

      <header className="subnav">
        <nav className="subnavs">
          <ul>
            <li className="l1" onClick={() => open("serve")}>
              Who We Serve <i class="fa-solid fa-chevron-down "></i>
            </li>
            <li className="l2" onClick={() => open("solutions")}>
              Solutions <i class="fa-solid fa-chevron-down "></i>
            </li>
            <li className="l3" onClick={() => open("Capabilities")}>
              Capabilities <i class="fa-solid fa-chevron-down "></i>
            </li>
            <li className="l4" onClick={() => open("Insights")}>
              Insights <i class="fa-solid fa-chevron-down "></i>{" "}
            </li>
            <li className="l5" onClick={() => open("About Us")}>
              About Us <i class="fa-solid fa-chevron-down "></i>
            </li>
            <li className="l6" onClick={() => open("Support")}>
              Support <i class="fa-solid fa-chevron-down "></i>
            </li>
          </ul>
        </nav>
      </header>

      {pop && (
        <>
          <div className="pop">
            {/* <Header2Feature6 /> */}
            {renderComponents}
          </div>
        </>
      )}
    </>
  );
};

export default Header;
