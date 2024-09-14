import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

import "./Hero1.css";
import "./HeroMedia.css";
const Hero1 = () => {
  return (
    <>
      {/* HERO1 */}
      <div
        id="imageCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img
              src={
                "https://www.moodys.com/web/en/us/v3/homepage/research-assistant-home-page-banner.jpg"
              }
              className="d-block w-100"
              alt="..."
            />
            {/* <div className="carousel-caption d-none d-md-block"> */}
            <div className="content-sec-coursel">
              <h1>
                Moody’s Research Assistant is   entering a new era
              </h1>
              <p>
                The new Advanced Query workspace presents an expanded experience
                that unlocks   more workflows. Powered by GenAI. Backed by
                Moody’s data.
              </p>
            </div>
          </div>
          {/* Slide 2 */}
          <div className="carousel-item">
            <img
              src={
                "https://www.moodys.com/web/en/us/images/topic-page-images/Data-Center-Banner.jpg"
              }
              className="d-block w-100"
              alt="..."
            />
            <div className="content-sec-coursel">
              <h1>
                Rapid data center capacity growth to   meet surging
                computing demand   poses long-term risks
              </h1>
              <p>
                As global data center capacity doubles over the next five years,
                large capital needs  
                will require access to multiple debt capital markets.
                Availability of reliable power is a  
                key growth constraint.
              </p>
            </div>
          </div>
          {/* Slide 3 */}
          <div className="carousel-item">
            <img
              src={
                "https://www.moodys.com/web/en/us/images/topic-page-images/getty-1143920995.jpg"
              }
              className="d-block w-100"
              alt="..."
            />
            <div className="content-sec-coursel">
              <h1>
                GenAI powers new early warning   system as uncertainty
                surrounds   commercial real estate
              </h1>
              <p>
                Moody’s introduces capability to determine when breaking news
                may impact lender   and investor portfolios.
              </p>
            </div>
          </div>
          {/* Slide 4 */}
          <div className="carousel-item">
            <img
              src={
                "https://www.moodys.com/web/en/us/images/topic-page-images/1803650357.jpg"
              }
              className="d-block w-100"
              alt="..."
            />
            <div className="content-sec-coursel">
              <h1>
                Cycle bottom may be taking shape   for UK corporate credit
                risk
              </h1>
              <p>
                UK corporate credit risk is cautiously optimistic, but the
                outlook does not indicate a   peak or sustained easing
                until the latter part of 2025, as headwinds to improvement{" "}
                  remain.
              </p>
            </div>
          </div>
          {/* Slide 5 */}
          <div className="carousel-item">
            <img
              src={
                "https://www.moodys.com/web/en/us/images/topic-page-images/hybrid-electric-vehicles/GettyImages-1447161057.jpg"
              }
              className="d-block w-100"
              alt="..."
            />
            <div className="content-sec-coursel">
              <h1>
                Steady GDP growth continues for   emerging markets, with
                wide  
                variation by country
              </h1>
              <p>
                We have revised our aggregate EM forecast up slightly to 3.9%
                for 2024-25 to reflect  
                faster-than-expected growth in some of the largest EMs so far
                this year. Disinflation   continues but is slowing.
              </p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* HERO2 */}
      <div className="word">
        <p>Featured insights</p>
      </div>
      <div className="main">
        {/* Big Image */}
        <div className="big-img">
          <h3>
            Moody’s insurance  
            conferences throw  
            spotlight on  
            interest rates,  
            inflation
          </h3>
          <button className="small-btn">podcast</button>
        </div>

        {/* Small Images Section */}
        <div className="small-img">
          {/* First small image and its content */}
          <div className="small-img1">
            <img
              src="https://www.moodys.com/web/en/us/images/topic-page-images/Panoramic_Singapore_CBD960x540.jpg"
              alt="Small Image 1"
            />
            <div className="sml-flx">
              <p>
                Aug 22, 2024  Moody’s Ratings
              </p>
              <h2>
                US-dollar bond issuance poised  for comeback in Southeast
                Asia  as Fed rate cut looms
              </h2>
              <button>Report</button>
            </div>
          </div>
              
          {/* Second small image and its content */}
          <div className="small-img1">
            <img
              src="https://www.moodys.com/web/en/us/images/topic-page-images/climate/1183123042.jpg"
              alt="Small Image 2"
            />
            <div className="sml-flx">
              <p>
                Aug 22, 2024  Moody’s Ratings
              </p>
              <h2>
                China’s latest climate policies will 
                bring long-term benefits for net- 
                zero journey
              </h2>
              <button>Report</button>
            </div>
          </div>

          {/* Third small image and its content */}
          <div className="small-img1">
            <img
              src="https://www.moodys.com/web/en/us/images/topic-page-images/data-types/data_types_thumbnail_4.jpg"
              alt="Small Image 3"
            />
            <div className="sml-flx">
              <p>
                Aug 22, 2024  Moody’s Ratings
              </p>
              <h2>
                Earnings trajectories at Indian 
                and Indonesian firms to diverge 
                but stay strong
              </h2>
              <button>Report</button>
            </div>
          </div>
        </div>
      </div>

      {/* HERO3 */}

      <div className="word2">
        <h3>Topics to explore </h3>
      </div>

      <div className="hero-3">
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 3,
              slidesPerGroup: 2,
            },
          }}
          scrollbar={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
        >
          <div className="imghero3">
            <SwiperSlide>
              <img src="https://www.moodys.com/web/en/us/v3/homepage/Credit-risk-1148836012-homepage_theme.jpg" />
              <div className="text1">
                <h3>Credit risk</h3>
                <p>
                  Get insights into current events  
                  and trends affecting global credit  
                  markets.
                </p>
                <button>Learn more</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.moodys.com/web/en/us/v3/homepage/Compliance-1229912104-homepage_theme.jpg" />
              <div className="text2">
                <h3>Compliance</h3>
                <p>
                  Learn how Moody’s compliance &  
                  third-party risk management  
                  capabilities can optimize and   automate entity
                  verification,
                   
                  onboarding, monitoring, and more.
                </p>
                <button>Learn more</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.moodys.com/web/en/us/v3/homepage/private-credit-1494317425-homepage_theme.jpg" />
              <div className="text1">
                <h3>Compliance</h3>
                <p>
                  Learn how Moody’s compliance & 
                  third-party risk management 
                  capabilities can optimize and  automate entity
                  verification,
                   
                  onboarding, monitoring, and more.
                </p>
                <button>Learn more</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://www.moodys.com/web/en/us/v3/homepage/data-theme-card.png"
                alt=""
              />
              <div className="text4">
                <h3>Compliance</h3>
                <p>
                  Learn how Moody’s compliance & 
                  third-party risk management 
                  capabilities can optimize and  automate entity
                  verification,
                   
                  onboarding, monitoring, and more.
                </p>
                <button>Learn more</button>
              </div>
              v
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://www.moodys.com/web/en/us/v3/homepage/ESG-1183123042-homepage_theme.jpg"
                alt=""
              />
              <div className="text1">
                <h3>Compliance</h3>
                <p>
                  Learn how Moody’s compliance & 
                  third-party risk management   
                  capabilities can optimize and    automate entity
                  verification,

                  onboarding, monitoring, and more.
                </p>
                <button>Learn more</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://www.moodys.com/web/en/us/v3/homepage/climate-1277496844-homepage_theme.jpg  "
                alt=""
              />
              <div className="text7">
                <h3>Compliance</h3>
                <p>
                  Learn how Moody’s compliance & 
                  third-party risk management 
                  capabilities can optimize and  automate entity
                  verification,
                  onboarding, monitoring, and more.
                </p>
                <button>Learn more</button>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>

      {/* HERO4 */}

      <div className="half-sec"></div>
      <div className="hero4">
        <h3>525+ million entities</h3>
        <div className="hero4-1">
        <div className="hero4-2">
        <p>
          Moody’s Orbis database  
          now covers over 525M  entities. The world's most 
          powerful database for  entity and ownership  data,
          enhanced with 
          real-time registry access.  Gain actionable insights  and
          take decisive action.
        </p>
        <button>Learn more</button>
        </div>
        <img
          src="https://www.moodys.com/web/en/us/v3/homepage/hero-genai-banner.jpg"
          alt=""
        />
        </div>
      </div>

      {/* HERO5 */}
      <div className="hero5">
        <div className="heading5">
          <h2>Discover more</h2>
        </div>
        <div className="main-card d-flex gap-1">
          <div className="firstcard d-flex justify-content-between align-items-center flex-column">
            {/* IMG-SEC-COL-1 */}

            <div className="firstcard1">
              <h2>
                Sanctioned  Securities  Screening
              </h2>
              <p>
                Invest with confidence.  Unlock security-level 
                sanctions exposure with  Moody’s.
              </p>
              <button>
                Learn More <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            {/* CARD-IMG2 */}

            <div className="firstcard2">
              <img
                src="https://www.moodys.com/web/en/us/_jcr_content/root/container/container_1152551033/container/card_insight_4161115.coreimg.jpeg/1725529207550/hero-dam-office-building-teal-blue-windows.jpeg"
                alt=""
              />
              <p className="pop-txt">RESEARCH</p>
              <span className="para">
                <span className="line">Aug 12, 2024</span>
                 
                <span className="line">Moody's Ratings</span>
              </span>
              <h5>
                China's new growth 
                sectors face challenges 
                amid supply-demand 
                imbalance
              </h5>
              <h6>
                Despite rapidly rising demand, excess  capacity in some
                new growth sectors  will linger for at least the next 12
                to 18 
                months. Trade barriers could also  hinder the absorption
                of supply via  exports.
              </h6>
              <button>
                Read more <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            {/* CARD-IMG3 */}
            <div className="firstcard2">
              <img
                src="https://www.moodys.com/web/en/us/_jcr_content/root/container/container_1152551033/container/card_insight_copy_1586015191.coreimg.jpeg/1716305632809/the-infinite-game.jpeg"
                alt=""
              />
              <p className="pop-txt">RESEARCH</p>
              <span className="para">
                <span className="line">MOODY'S</span>
                 
                <span className="line">Moody's Ratings</span>
              </span>
              <h5>
                The Infinite Game: Inside 
                the constantly evolving 
                global battle with 
                financial crime
              </h5>
              <h6>
                Financial crime and those that seek to  combat it are
                caught in a never- 
                ending cat and mouse game marked  by ever-evolving
                criminal tactics,  hidden human costs, and the 
                relentless drive to stop them.
              </h6>
              <button>
                Watch series <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            {/* CARD-IMG4 */}
            <div className="firstcard2">
              <img
                src="https://www.moodys.com/web/en/us/_jcr_content/root/container/container_1152551033/container/card_insight_copy.coreimg.jpeg/1723476848411/changing-shape-of-supply-chain-risk.jpeg"
                alt=""
              />
              <p className="pop-txt">ARTICLE</p>
              <span className="para">
                <span className="line">Aug 12, 2024</span>
                 
                <span className="line">Moody's Ratings</span>
              </span>
              <h5>
                Navigating supply chain  challenges as the U.S. 
                and China reshape trade  ties
              </h5>
              <h6>
                U.S. companies are reducing their  reliance on China,
                introducing new risks as they seek alternate markets.
              </h6>
              <button>
                Read more <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>

          {/* IMG-SEC-COL-2 */}

          <div
            className="secondcard d-flex  align-items-center flex-column gap-5"
           
          >
            {/* IMG-SEC-COL-2 -->IMG-1*/}

            <div className="firstcard2">
              <img
                src="https://www.moodys.com/web/en/us/_jcr_content/root/container/container_1152551033/container/card_insight_1469828621.coreimg.jpeg/1724339711719/1192372567.jpeg"
                alt=""
              />
              <p className="pop-txt">RESEARCH</p>
              <span className="para">
                <span className="line">Aug 12, 2024</span>
                 
                <span className="line">Moody's Ratings</span>
              </span>
              <h5>
                Global corporate defaults  slowed in July to an 
                eight-month low
              </h5>
              <h6>
                Speculative-grade debt issuers have  continued to actively
                address their  debt maturities, reducing the chance 
                for a significant rise in corporate  defaults.
              </h6>
              <button>
                Read more <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            {/* IMG-SEC-COL-2 -->IMG-2*/}

            <div className="firstcard2">
              <img
                src="https://www.moodys.com/web/en/us/_jcr_content/root/container/container_1152551033/container/card_insight_copy_12.coreimg.jpeg/1723476873395/data-decay-and-its-impact-the-importance-of-regular-data-maintenance.jpeg"
                alt=""
              />
              <p className="pop-txt">RESEARCH</p>
              <span className="para">
                <span className="line">Aug 12, 2024</span>
                 
                <span className="line">Moody's Ratings</span>
              </span>
              <h5>
                Global corporate defaults  slowed in July to an 
                eight-month low
              </h5>
              <h6>
                Speculative-grade debt issuers have  continued to actively
                address their  debt maturities, reducing the chance 
                for a significant rise in corporate  defaults.
              </h6>
              <button>
                Read more <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            {/* IMG-SEC-COL-2 -->IMG-3*/}

            <div
              className="firstcard22"
            >
              {/* <div>
                <p className="pop-txt" >
                  WHITEPAPER
                </p>
              </div> */}
              <p >
                Jun 18, 2024 Moody’s
              </p>
              <h5 >
                From boom to gloom: 
                Navigating the  impending downturn in 
                the German construction  and real estate sector
              </h5>
              <h6 >
                A decrease in demand for new   buildings is threatening the{" "}
                 
                performance of the CRE sector in   many European countries,
                including   Germany, which is currently   experiencing
                a real estate downturn.
              </h6>
              <button>
                Read more <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            {/* IMG-SEC-COL-2 -->IMG-4*/}

            <div className="firstcard2">
              <img
                src="https://www.moodys.com/web/en/us/_jcr_content/root/container/container_1152551033/container/card_insight_copy_514227356.coreimg.jpeg/1723476817004/risky-business-the-seven-indicators-of-shell-company-risk.jpeg"
                alt=""
              />
              <p className="pop-txt">RESEARCH</p>
              <span className="para">
                <span className="line">Aug 12, 2024</span>
                 
                <span className="line">Moody's Ratings</span>
              </span>
              <h5>
                Global corporate defaults   slowed in July to an  {" "}
                eight-month low
              </h5>
              <h6>
                Speculative-grade debt issuers have   continued to actively
                address their   debt maturities, reducing the chance  {" "}
                for a significant rise in corporate   defaults.
              </h6>
              <button>
                Read more <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="thirdcard d-flex gap-4 align-items-center flex-column">
            {/* IMG-SEC-COL-3 -->IMG-1*/}

            <div className="firstcard2">
              <img
                src="https://www.moodys.com/web/en/us/_jcr_content/root/container/container_1152551033/container/card_insight_416111578.coreimg.jpeg/1724079527318/1277496844.jpeg"
                alt=""
              />
              <p className="pop-txt">RESEARCH</p>
              <span className="para">
                <span className="line">Aug 12, 2024</span>
                 
                <span className="line">Moody's Ratings</span>
              </span>
              <h5>
                Global corporate defaults   slowed in July to an  {" "}
                eight-month low
              </h5>
              <h6>
                Speculative-grade debt issuers have   continued to actively
                address their   debt maturities, reducing the chance  {" "}
                for a significant rise in corporate   defaults.
              </h6>
              <button>
                Read more <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            {/* IMG-SEC-COL-3 -->IMG-2*/}
            <div className="firstcard2">
              <img
                src="https://www.moodys.com/web/en/us/_jcr_content/root/container/container_1152551033/container/card_insight_copy_15.coreimg.jpeg/1717701180306/mdm-ebook-maximizing-datas-potential.jpeg"
                alt=""
              />
              <p className="pop-txt">RESEARCH</p>
              <span className="para">
                <span className="line">Aug 12, 2024</span>
                 
                <span className="line">Moody's Ratings</span>
              </span>
              <h5>
                Global corporate defaults   slowed in July to an  {" "}
                eight-month low
              </h5>
              <h6>
                Speculative-grade debt issuers have   continued to actively
                address their   debt maturities, reducing the chance  {" "}
                for a significant rise in corporate   defaults.
              </h6>
              <button>
                Read more <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            {/* IMG-SEC-COL-3 -->IMG-3*/}
            <div className="firstcard2">
              <img
                src="https://www.moodys.com/web/en/us/_jcr_content/root/container/container_1152551033/container/card_insight.coreimg.jpeg/1716305694135/geopolitical-and-supply-chains.jpeg"
                alt=""
              />
              <p className="pop-txt">RESEARCH</p>
              <span className="para">
                <span className="line">Aug 12, 2024</span>
                 
                <span className="line">Moody's Ratings</span>
              </span>
              <h5>
                Global corporate defaults   slowed in July to an  {" "}
                eight-month low
              </h5>
              <h6>
                Speculative-grade debt issuers have   continued to actively
                address their   debt maturities, reducing the chance  {" "}
                for a significant rise in corporate   defaults.
              </h6>
              <button>
                Read more <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            {/* IMG-SEC-COL-3 -->IMG-4*/}

            <div className="firstcard2">
              <img
                src="https://www.moodys.com/web/en/us/_jcr_content/root/container/container_1152551033/container/card_insight_copy_12.coreimg.jpeg/1723476873395/data-decay-and-its-impact-the-importance-of-regular-data-maintenance.jpeg"
                alt=""
              />
              <p className="pop-txt">RESEARCH</p>
              <span className="para">
                <span className="line">Aug 12, 2024</span>
                 
                <span className="line">Moody's Ratings</span>
              </span>
              <h5>
                Global corporate defaults slowed in July to an  
                eight-month low
              </h5>
              <h6>
                Speculative-grade debt issuers have continued to actively
                address their  debt maturities, reducing the chance  
                for a significant rise in corporate  defaults.
              </h6>
              <button>
                Read more <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* HERO-6 */}

      <div className="image-row">
        <div className="image-container">
          <img
            src="https://www.moodys.com/web/en/us/_jcr_content/root/container/container_1356359476/column_control/col1/image_copy_copy_copy.coreimg.jpeg/1712067037090/mdc-bottom-stamp-moodys-brand.jpeg"
            alt="Image 1"
          />
          <h3>Moody's</h3>
          <p>
            A bold evolution of the  Moody's brand for a new era 
            of risk.
          </p>
          <button>Learn more</button>
        </div>
        <div className="image-container">
          <img
            src="https://www.moodys.com/web/en/us/_jcr_content/root/container/container_1356359476/column_control/col2/image_copy.coreimg.jpeg/1712066639524/mdc-home-innovate-opt.jpeg"
            alt="Image 2"
          />
          <h3>
            Innovating  with  purpose
          </h3>
          <p>
            Discover how Moody’s  combines cutting-edge 
            technology and world-class  talent to drive innovation.
          </p>
          <button>Learn more</button>
        </div>
        <div className="image-container">
          <img
            src="https://www.moodys.com/web/en/us/_jcr_content/root/container/container_1356359476/column_control/col3/image_copy.coreimg.jpeg/1712066653700/about-us-evp-opt.jpeg"
            alt="Image 3"
          />
          <h3>
            Work with  brilliant  minds
          </h3>
          <p>
            Explore career opportunities at  Moody’s.
          </p>
          <button> join us</button>
        </div>
      </div>
    </>
  );
};

export default Hero1;
