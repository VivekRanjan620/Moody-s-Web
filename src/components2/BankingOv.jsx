import React, { useEffect } from "react";
import "./BankingOv.css";
import "./Media2.css";



function BankingOv() {
  useEffect(() => {
    // Initialize ScrollSpy
    if (window.bootstrap && window.bootstrap.ScrollSpy) {
      new window.bootstrap.ScrollSpy(document.body, {
        target: "#list-example",
        offset: 10,
      });
    }
  }, []);
   

  const images = [
    'https://www.moodys.com/web/en/us/v3/sectors/banking/chartis-rt100-2024-credit-risk-for-the-banking-book-moodys.png',

    'https://www.moodys.com/web/en/us/v3/sectors/banking/best-alm-liquidity-risk-solution-by-a-vendor-moodys-analytics.png',

    'https://www.moodys.com/web/en/us/v3/sectors/banking/chartis-retfinanalytics25-2023-stress-testing-sm-logo.png',

    'https://www.moodys.com/web/en/us/v3/sectors/banking/chartis-credit-risk-reporting-solutions-2023-category-leader-logo.png',

    'https://www.moodys.com/web/en/us/v3/sectors/banking/chartis-quanttech50-2023-ai-inn-in-wb-logo.png',

    'https://www.moodys.com/web/en/us/v3/sectors/banking/chartis-retfinanalytics25-2023-stress-testing-sm-logo.png',

    'https://www.moodys.com/web/en/us/v3/sectors/banking/chartis-rt100-2024-credit-risk-for-the-banking-book-moodys.png',

    'https://www.moodys.com/web/en/us/v3/sectors/banking/chartis-rt100-2024-credit-risk-for-the-banking-book-moodys.png',

    'https://www.moodys.com/web/en/us/v3/sectors/banking/best-alm-liquidity-risk-solution-by-a-vendor-moodys-analytics.png',

    'https://www.moodys.com/web/en/us/v3/sectors/banking/best-alm-liquidity-risk-solution-by-a-vendor-moodys-analytics.png',
  ];

  return (
    <>
    {/* SEC-01 */}
      <div className="bnk">
        <div className="left1">
          <h2>Banking</h2>
        </div>
        <div className="right1">
          <p>
            Banks need to separate risk signals from the noise, connect data
            more seamlessly, and uncover patterns hidden within the chaos so
            they can stay ahead of the curve.
          </p>

          <p>
            Moody’s brings together data, experience, and best practice
            capabilities, with our specialized and agile intelligence.
          </p>
          <p>All so banks can act with confidence.</p>
        </div>
      </div>
      <div className="cont1"></div>

      {/* SEC-3 */}

      <div className="Resp-header">
        <nav>
          <div className="item1">JUMP TO</div>
          <div className="item2">SOLUTIONS</div>
          <div className="item3">CASE STUDIES</div>
          <div className="item4">CAPABILITIES</div>
          <div className="item5">TECHNOLOGY</div>
          <div className="item6">NEWS AND VIEWS</div>
        </nav>
      </div>

      {/* SEC-6 */}

      <div className="raw">
        <div className="fbi">
          <div className="blue-line"></div>
          <div className="crd-cnt">
            <h3>Software and solutions</h3>
            <p>
              Moody’s provides banking software and solutions to deliver data,
              intelligence, and expertise that enables you to confidently make
              decisions, take decisive actions, and turn your bank’s plans into
              a reality.
            </p>
          </div>
          <div className="crd-img-cnt">
            <img
              src="https://www.moodys.com/web/en/us/v3/icon/benefit-card-3.svg"
              alt=""
            />
          </div>
        </div>

        <div className="fbi">
          <div className="blue-line"></div>
          <div className="crd-cnt">
            <h3>Support and empowerment</h3>
            <p>
              Moody’s enables your bank to focus its energy on pursuing the most
              lucrative opportunities in an increasingly competitive market. We
              work to optimize efficiency—driving growth and elevating your
              team.
            </p>{" "}
          </div>
          <div className="crd-img-cnt">
            <img
              src="https://www.moodys.com/web/en/us/v3/icon/benefit-card-3.svg"
              alt=""
            />
          </div>
        </div>

        <div className="fbi">
          <div className="blue-line"></div>
          <div className="crd-cnt">
            <h3>Achieve strategic goals</h3>
            <p>
              Moody's provides your bank with data that promotes insightful
              thinking. Our analytics and predictive scenarios highlight risks
              and opportunities. Our automation, AI, and advisory services
              reduce your team’s number of manual tasks, so that you can focus
              on strategic goals.
            </p>
          </div>
          <div className="crd-img-cnt">
            <img
              src="https://www.moodys.com/web/en/us/v3/icon/benefit-card-3.svg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* SEC-7 */}

      <div className="Vista">
        <div className="left2">
          <p> TESTIMONIAL</p>
        </div>
        <div className="right2">
          <h3>
            ”Having a single platform that calculates our current ALLL and
            future CECL metrics, when we begin reporting under the new standard,
            is a game-changer.”
          </h3>
          <p>- Robert Bruce Chief Financial Officer, Vista Bank</p>
        </div>
      </div>

      {/* SEC-8 */}

      <div className="container mt-4">
        <div className="row">
          {/* Left Column - List */}
          <div className="col-4">
            <div id="list-example" className="list-group">
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-1"
              >
                Lending
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-2"
              >
                Risk
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-3"
              >
                Finance
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-4"
              >
                Compliance & third-party risk
              </a>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-8">
            <div
              data-bs-spy="scroll"
              data-bs-target="#list-example"
              className="scrollspy-example"
              tabIndex="0"
            >
              <h4 id="list-item-1">Lending</h4>
              <p>
                Our award-winning Lending Suite comprises separate, yet
                seamlessly interconnected, Software-as-a-Service (SaaS) banking
                tools that help your bank make credit decisions confidently and
                manage loan portfolios effectively. Our suite includes targeted
                workflows tailored to different types of assets and various
                stages of the credit lifecycle. This approach enables your bank
                to simplify its operations, identify potential risks, enhance
                team communication, and improve client experiences.
              </p>
              <h4 id="list-item-2">Risk</h4>
              <p>
                Our Risk solutions help your bank make confident decisions
                regarding its risk-return profiles. Our banking risk solutions
                include Credit/Liquidity Risk Measurement, Early Warning, Stress
                Testing, Concentration Risk, Emerging Risks, Know Your Customer
                (KYC) Compliance, and Third-Party Risk Management (TPRM). This
                approach helps your bank gain a full understanding of portfolio
                risks, emerging risks, and mitigation strategies, as well as
                identify opportunities that align with its strategic risk and
                reward appetite.
              </p>
              <h4 id="list-item-3">Finance</h4>
              <p>
                Our integrated finance solutions help your bank become more
                resilient, secure capital allocations for strategic goals, and
                transform regulatory compliance processes into opportunities.
                Our solutions address capital planning, balance sheet
                management, and regulatory reporting. Our offerings also
                streamline bank treasury functions, spanning asset and liability
                management, Funds Transfer Pricing (FTP), liquidity risk
                management, and investment decisions. This approach enables your
                bank to conduct scenario assessments, gain a full view of risk,
                and navigate an evolving economic landscape.
              </p>
              <h4 id="list-item-4">Item 4</h4>
              <p>
                This is the content for Item 4. You can add any relevant content
                here.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SEC-9-CARD-1 */}
      <div className="rbb1">
        <h2>Case studies</h2>
        <div className="rbb2">
          <div class="row row-cols-1 row-cols-md-3 g-4 mt-5">
            <div class="col">
              <div class="card h-100">
                <img
                  src="https://www.moodys.com/web/en/us/who-we-serve/banking/_jcr_content/root/container/container_1805022614/column_control/col1/card_insight.coreimg.png/1721233837460/banking-casestudy1-momentum-metropolitan-chooses-portfoliostudio-for-confident-portfolio-steering.png"
                  alt=""
                />
                <div class="card-body">
                  <div className="upr">
                    <p>CASE STUDY</p>
                  </div>
                  <p class="card-text">
                    Momentum Metropolitan chooses PortfolioStudio™ for confident
                    portfolio steering
                  </p>
                  <button>
                    Read more <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img
                  src="https://www.moodys.com/web/en/us/who-we-serve/banking/_jcr_content/root/container/container_1805022614/column_control/col2/card_insight_copy.coreimg.png/1698412143765/banking-casestudy2-teachers-federal-credit-union-builds-a-robust-credit-and-treasury-function-enabled-by-moodys-analytics.png"
                  alt=""
                />
                <div class="card-body">
                  <div className="upr">
                    <p>CASE STUDY</p>
                  </div>
                  <p class="card-text">
                    Teachers Federal Credit Union builds a robust credit and
                    treasury function enabled by Moody’s
                  </p>
                  <button>
                    Read more <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img
                  src="https://www.moodys.com/web/en/us/who-we-serve/banking/_jcr_content/root/container/container_1805022614/column_control/col3/card_insight_copy.coreimg.png/1719486602573/banking-casestudy3-automation-ai-and-the-future-of-lending-case-study-on-the-quiqspread-tool.png"
                  alt=""
                />
                <div class="card-body">
                  <div className="upr">
                    <p>CASE STUDY</p>
                  </div>
                  <p class="card-text">
                    Nedbank saves time, improves consistency, and reduces errors
                    with QUIQspread
                  </p>
                  <button>
                    Read more <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEC-10 */}
      <div className="gsa">
        <h2>Capabilities--Animation</h2>
        <p>Scroll-Section-Pending</p>
      </div>

      {/* SEC-11-VIDEO */}

      <div className="custom-video-container">
        <iframe src="https://player.vimeo.com/video/954327829" />
      </div>

      {/* SEC-12 */}
      <div className="Main-12">
        <div className="hd-12">
          <h2>Bringing technology closer to you</h2>
          <p>
            In an ever-changing world of exponential risk and regulatory
            pressure, banks must anticipate and react to change faster than
            ever. Resilience is critical to success, requiring you to evolve
            technologically to remain competitive.
          </p>
          <p>
            Through a continuous cycle of research, development, and expert
            partnerships, Moody’s is committed to delivering the latest
            innovative technology within our solutions to our customers reliably
            and securely.
          </p>
        </div>
        <div className="div-12">
          <div className="left-12">
            <h3>#BankingOnTech</h3>
            <p>
              We leverage the power of technology such as AI, SaaS, cloud
              computing, machine learning, and APIs to deliver business
              efficiencies through interoperability, scalability, and
              automation.
            </p>
            <p>
              Technology also enhances your decision-making by bringing Moody’s
              tools, data, and analytics together and closer to you so you can
              use our advanced expertise in an intuitive, seamless way. At
              Moody’s, we’re unlocking the next generation of technology and
              putting it to work for you.
            </p>
          </div>
          <div className="right-12"></div>
        </div>
      </div>

      {/* SEC-13--GRID--CARD-02 */}

      <div className="grid-container">
        <div className="grid-item item1">
          <div className="card-13">
            <img
              src="https://www.moodys.com/web/en/us/v3/images/news-views.png"
              alt=""
            />
          </div>
        </div>
        <div className="grid-item item2">
          <div className="card-13">
            
            <img
              src="https://www.moodys.com/web/en/us/who-we-serve/banking/_jcr_content/root/container/container_1152551033/container/card_insight_copy_12_1987107486.coreimg.jpeg/1725526943613/gettyimages-980374196.jpeg"
              alt=""
            />
            <div className="upr-13">
              <p>RESEARCH</p>
            </div>
            <div className="tpt">
              <p>Aug 15, 2024 </p>
              <p>Moody's Ratings</p>
              <h4>
                Latin American banks’ future profitability faces increasing
                challenges
              </h4>
              <p>
                Low growth, new competition and loan-origination challenges
                could dent profitability, which has kept the region's banks
                above their developed-market peers.
              </p>
              <button>Read more <i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
        <div className="grid-item item3">
          <div className="card-13">
           <img src="https://www.moodys.com/web/en/us/who-we-serve/banking/_jcr_content/root/container/container_1152551033/container/card_insight_copy_1210329090.coreimg.jpeg/1725526960077/gettyimages-157643109.jpeg" alt="" />
           <div className="upr-13">
              <p>RESEARCH</p>
            </div>
            <div className="tpt">
            <p>Aug 15, 2024 </p>
            <p>Moody's Ratings</p>
              <h4>
                Banks – US: Q2 2024 household debt and credit update: Rate of
                new auto loan delinquencies levels off, halting a rise since Q4
                2021
              </h4>
              <p>
                In Q2 the rate of new auto loan delinquencies was largely
                unchanged for the first time in three years; new credit card
                delinquencies will likely peak soon; card loan growth slowed
                materially.
              </p>
              <button>Read more <i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
        <div className="grid-item item4">
          <div className="card-13">
            <img
              src="https://www.moodys.com/web/en/us/who-we-serve/banking/_jcr_content/root/container/container_1152551033/container/card_insight_copy_12.coreimg.jpeg/1725526977423/529363081-london.jpeg"
              alt=""
            />
             <div className="upr-13">
              <p>RESEARCH</p>
            </div>
            <div className="tpt">
              <p>Aug 15, 2024 </p>
              <p>Moody's Ratings</p>
              <h4>
              Europe tightens ESG regulatory requirements for banks, a credit positive
              </h4>
              <p>
              The new rules will improve banks’ awareness and understanding of environmental, social and governance risks, encouraging the long-term strategic planning that managing these risks requires.
              </p>
              <button>Read more <i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
        <div className="grid-item item5">
          <div className="card-13">
           <img src="https://www.moodys.com/web/en/us/who-we-serve/banking/_jcr_content/root/container/container_1152551033/container/card_insight_copy_18.coreimg.jpeg/1721229993254/992782718-2880x1923.jpeg" alt="" />
           <div className="upr-13">
              <p>RESEARCH</p>
            </div>
            <div className="tpt">
              <p>Aug 15, 2024 </p>
              <p>Moody's Ratings</p>
              <h4>
              US banks and life insurers face commercial real estate risks
              </h4>
              <p>
              Our analysts discuss which segments and loan types pose the largest risks to US banks and life insurers, and zero in on concentration risks in asset portfolios.
              </p>
              <button>Read more <i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
        <div className="grid-item item6">
          <div className="card-13">
           <img src="https://www.moodys.com/web/en/us/who-we-serve/banking/_jcr_content/root/container/container_1152551033/container/card_insight_copy.coreimg.jpeg/1723455317300/banking-2-the-lingering-challenges-of-entity-resolution-in-the-financial-services-industry.jpeg" alt="" />
           <div className="upr-13">
              <p>RESEARCH</p>
            </div>
            <div className="tpt">
              <p>Aug 15, 2024 </p>
              <p>Moody's Ratings</p>
              <h4>
              The lingering challenges of entity resolution in the financial services industry
              </h4>
              <p>
              Despite advancements in technology, poor entity resolution continues to have a significant impact on businesses, resulting in operational inefficiencies, regulatory pressures, slow time to market, customer churn, reputational damage, and hefty fines.
              </p>
              <button>Read more <i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
        <div className="grid-item item7">
          <div className="card-13">
           <img src="https://www.moodys.com/web/en/us/who-we-serve/banking/_jcr_content/root/container/container_1152551033/container/card_insight.coreimg.jpeg/1723455287852/banking-1-how-small-and-medium-sized-banks-can-enhance-deposits-modelling-frameworks.jpeg" alt="" />
           <div className="upr-13">
              <p>RESEARCH</p>
            </div>
            <div className="tpt">
              <p>Aug 15, 2024 </p>
              <p>Moody's Ratings</p>
              <h4>
              How small and medium-sized banks can enhance deposits modelling frameworks
              </h4>
              <p>
              Recent events have called into question the reliability of deposits as a primary source of funding for small and medium-sized banks.
              </p>
              <p>Stickiness of deposits that generations of bankers had counted on suddenly seem ephemeral.</p>
              <button>Read more <i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
        <div className="grid-item item8">
          <div className="card-13">
            <img src="https://www.moodys.com/web/en/us/who-we-serve/banking/_jcr_content/root/container/container_1152551033/container/card_insight_copy_co.coreimg.jpeg/1723455620918/banking-web.jpeg" alt="" />
            
            <div className="tpt">
              <p>Aug 15, 2024 </p>
              <p>Moody's Ratings</p>
              <h4>
              Navigating your Journey to SaaS in Banking: From Consideration to Implementation
              </h4>
              <p>
              Watch our webinar, Navigating your SaaS journey in Banking – with Moody’s, AWS and Rothschild & Co. They discuss the benefits of SaaS as well as practical steps for implementation.
              </p>
              <button>Read more <i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </div>

      {/* SEC-14-Animation */}
      <div className="scroll-container">
      <div className="scroll-content">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`img-${index}`} className="scroll-img" />
        ))}
        {/* Duplicate the images for continuous scrolling */}
        {images.map((img, index) => (
          <img key={index + 10} src={img} alt={`img-${index}`} className="scroll-img" />
        ))}
      </div>
    </div>


    {/* SEC-15--GRID--CARD-03 */}
      <div className="grid-container2">
        <div className="grid-items  item-15-1">
          <h3>Focus on Finance podcast <i class="fa-solid fa-arrow-right"></i></h3>
          <p>For banks, insurance and asset management.</p>
        </div>
        <div className="grid-items  item-15-2">
          <h3>Banking systems under strain  <i class="fa-solid fa-arrow-right"></i></h3>
          <p>Multiple stress point in the global banking sector have highlighted financial stability risks.</p>
        </div>
        <div className="grid-items  item-15-3">
          <h3>Banking in Focus  <i class="fa-solid fa-arrow-right"></i> </h3>   
          <p>Our timely events provide the global banking community with the information you need on credit risk, balance sheet management, regulatory compliance, and more.</p>
        </div>
      </div>  
    
    </>

  );
}

export default BankingOv;
