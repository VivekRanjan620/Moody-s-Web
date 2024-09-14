import React from 'react'
import './AboutUs.css'
const AboutUs = () => {
  return (
   <>
   <div className="video-cont">
   <video autoPlay loop muted playsInline>
        <source src="/public/videos/About.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img src="https://www.moodys.com/web/clientlibs/clientlib-site/resources/images/mdy_lg_white.svg" alt=""/>
      <div className='spn'>
      <p>A bold evolution</p>
      <p>of the Moody's</p>
      <p>brand</p>
      </div>
   </div>
   <div className="tet1">
    <div className="head1">
        <h1>Our mission</h1>
    </div>
    <div className="para">
        <p>Our mission is to be the leading source of</p>
        <p>relevant insights on exponential risk. Navigating</p>
        <p>risk is more complex than ever. Moody's provides</p>
        <p>rich data, expert analysis, robust tools supported by</p>
        <p>groundbreaking technologies, and a view of the</p>
        <p>future to enable our customers to unlock</p>
        <p>opportunity, advance their business, and act</p>
        <p>decisively.</p>
    </div>
   </div>
   <div className='tet2'>
    <div className="head2">
        <h1>Our values</h1>
    </div>
    <div className="sml1">
        <img src="https://www.moodys.com/web/en/us/about-us/_jcr_content/root/container/container/horizontal_scroller.coreimg.jpeg/1713254858784/about-us-people-lg-opt.jpeg    " alt="" />
    </div>
   </div>
   <div className='blank'>

   </div>
   <section className="info-section">
        <div className="info-content">
          <h1>Our vision for the future</h1>
          <p>As our world becomes increasingly interconnected, so do the risks we face. Discover the future vision for <br /> the Moody’s brand, what’s changing, and what it means for you.</p>

          <p>In a world shaped by increasingly interconnected risks, it is more difficult than ever to act with certainty. Our customers need to go beyond data into context, to go beyond context into meaning. Moody's provides a compass for understanding. With our rich history, innovative technologies and diverse expertise, we help customers develop a holistic view of their world. We decode complexity, uncovering opportunity amid exponential risk and informing the way forward. Partnering with Moody's gives customers a comprehensive, global perspective and the confidence to act, and empowers individuals and organizations to thrive.</p>

          <h2>What we do</h2>
          <p>Moody’s has highly skilled analysts, rich data, robust tools supported by groundbreaking technologies, and a view of the future informed by more than 115 years of expertise. We help customers accelerate value creation in this Era of Exponential Risk in 4 ways including:</p>
          <ul>
            <li>Ratings – We strive to be the global rating agency of choice for debt issuers and investors</li>
            <li>Research & Insights – Premier fixed income research business</li>
            <li>Data & Information – A data business powered by one of the world’s largest database on companies (450M and growing) and credit</li>
            <li>Decision Solutions – Three cloud-based SaaS-businesses serving mission-critical Banking, Insurance and KYC workflows</li>
          </ul>

          <h2>Our brand evolution</h2>
          <p>We’re updating the look and feel of our brand to better reflect the business we have become, and to express the ambition we have to become the leading source of relevant insights on exponential risk. Our new verbal and visual identity reflects our refreshed go-to-market strategy, reframing Moody's as a category of one and unlocking the opportunity this offers. We will now have one strong overarching corporate brand, which we aim to leverage and build equity into as much as possible.</p>

          <p>Moody’s Investors Service will now go to market as Moody’s Ratings. Our credit rating agency is our heritage and the business we are best known for in global markets. Moody’s Local will remain as the name for our domestic credit rating business in Latin America.</p>

          <p>Moody’s Analytics will now go to market as Moody’s. Moody’s provides data, intelligence and analytical tools to help business and financial leaders make confident decisions. Our reimagined brand heralds the start of a new chapter for Moody's. However, the values that have been the bedrock of our legacy and success remain the same. Our commitment to our customers’ evolving needs remains at the heart of who we are and what we do. Embedded in this commitment is quality of innovation, insightful analysis and industry-leading expertise that underpin our work. This is our new vision: a brand that positions us for the new Era of Exponential Risk we live in. We look forward to you joining us on the journey ahead.</p>
        </div>
      </section>

      <div className="image-row">
        <div className="image-container">
          <img
            src="https://www.moodys.com/web/en/us/_jcr_content/root/container/container_1356359476/column_control/col1/image_copy_copy_copy.coreimg.jpeg/1712067037090/mdc-bottom-stamp-moodys-brand.jpeg"
            alt="Image 1"
          />
         
        </div>
        <div className="image-container">
          <img
            src="https://www.moodys.com/web/en/us/_jcr_content/root/container/container_1356359476/column_control/col2/image_copy.coreimg.jpeg/1712066639524/mdc-home-innovate-opt.jpeg"
            alt="Image 2"
          />
         
        </div>
        <div className="image-container">
          <img
            src="https://www.moodys.com/web/en/us/_jcr_content/root/container/container_1356359476/column_control/col3/image_copy.coreimg.jpeg/1712066653700/about-us-evp-opt.jpeg"
            alt="Image 3"
          />
        </div>
      </div>
      
      <div className="hds-img">
        <h1>Leadership team</h1>
      </div>

    <div className="gallery-container">
      <div className="gallery-row">
        <div className="gallery-item">
          <img src="https://www.moodys.com/web/en/us/about-us/_jcr_content/root/container/container_42564852/container/container/image.coreimg.png/1710872362312/rob-fauber-800x800.png" alt="Image 1" />
          <h2>Title 1</h2>
          <p>Description 1</p>
        </div>
        <div className="gallery-item">
          <img src="https://www.moodys.com/web/en/us/about-us/_jcr_content/root/container/container_42564852/container/container_965922692/image_copy.coreimg.png/1710337700748/tamika-alsop.png" alt="Image 2" />
          <h2>Title 2</h2>
          <p>Description 2</p>
        </div>
        <div className="gallery-item">
          <img src="https://www.moodys.com/web/en/us/about-us/_jcr_content/root/container/container_42564852/container/container_342005484/image_copy_147510372.coreimg.png/1710337729966/christine-elliott.png" alt="Image 3" />
          <h2>Title 3</h2>
          <p>Description 3</p>
        </div>
      </div>
      <div className="gallery-row">
        <div className="gallery-item">
          <img src="https://www.moodys.com/web/en/us/about-us/_jcr_content/root/container/container_42564852/container/container_884161388__1258557960/image.coreimg.png/1715073012777/heuland-noemie-may2024-800x800.png" alt="Image 4" />
          <h2>Title 4</h2>
          <p>Description 4</p>
        </div>
        <div className="gallery-item">
          <img src="https://www.moodys.com/web/en/us/about-us/_jcr_content/root/container/container_42564852/container/container_1333732276_870863450/image.coreimg.jpeg/1715695162198/maral-kazanjian2.jpeg" alt="Image 5" />
          <h2>Title 5</h2>
          <p>Description 5</p>
        </div>
        <div className="gallery-item">
          <img src="https://www.moodys.com/web/en/us/about-us/_jcr_content/root/container/container_42564852/container/container_1343689235_650348232/image_copy.coreimg.png/1723129984467/platt-david-formal-800x800.png" alt="Image 6" />
          <h2>Title 6</h2>
          <p>Description 6</p>
        </div>
      </div>
      <div className="gallery-row">
        <div className="gallery-item">
          <img src="https://moodys.com/web/en/us/about-us/_jcr_content/root/container/container_42564852/container/container_818261559_/image_copy.coreimg.png/1710337898686/richard-steele.png" alt="Image 1" />
          <h2>Title 1</h2>
          <p>Description 1</p>
        </div>
        <div className="gallery-item">
          <img src="https://www.moodys.com/web/en/us/about-us/_jcr_content/root/container/container_42564852/container/container_884161388__441110004/image.coreimg.png/1710337942153/cat-tucker.png" alt="Image 2" />
          <h2>Title 2</h2>
          <p>Description 2</p>
        </div>
        <div className="gallery-item">
          <img src="https://www.moodys.com/web/en/us/about-us/_jcr_content/root/container/container_42564852/container/container_930957389_/image.coreimg.png/1710337961577/stephen-tulenko.png" alt="Image 3" />
          <h2>Title 3</h2>
          <p>Description 3</p>
        </div>
      </div>
      <div className="gallery-row">
        <div className="gallery-item">
          <img src="https://www.moodys.com/web/en/us/about-us/leadership/michael-west/_jcr_content/root/container/container/image.coreimg.jpeg/1710328345166/michael-west.jpeg" alt="Image 7" />
          <h2>Title 7</h2>
          <p>Description 7</p>
        </div>
      </div>
    </div>

    {/* Hero-10 */}
    <div className="image-row">
        <div className="image-container">
          <img
            src="https://www.moodys.com/web/en/us/_jcr_content/root/container/container_1356359476/column_control/col1/image_copy_copy_copy.coreimg.jpeg/1712067037090/mdc-bottom-stamp-moodys-brand.jpeg"
            alt="Image 1"
          />
          <h3>Careers</h3>
          <p>
            A bold evolution of the <br /> Moody's brand for a new era <br />
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
          Sustainability    
          </h3>
          <p>
            Discover how Moody’s <br /> combines cutting-edge <br />
            technology and world-class <br /> talent to drive innovation.
          </p>
          <button>Learn more</button>
        </div>
        <div className="image-container">
          <img
            src="https://www.moodys.com/web/en/us/_jcr_content/root/container/container_1356359476/column_control/col3/image_copy.coreimg.jpeg/1712066653700/about-us-evp-opt.jpeg"
            alt="Image 3"
          />
          <h3>
          Trust Center
          </h3>
          <p>
            Explore career opportunities at <br /> Moody’s.
          </p>
          <button> join us</button>
        </div>
      </div>

      <footer>
        <div className="hd1">
          <p>
            Note: Moody’s Corporation is comprised of separate divisions.
            Moody's Ratings publishes credit ratings and provides assessment
            services on a wide <br />
            range of debt obligations, programs and facilities, and the entities
            that issue such obligations in markets worldwide, including various
            corporate, <br /> financial institution and governmental
            obligations, and structured finance securities. Moody's Ratings
            products are set out here. All other products <br />
            and solutions described on this site are provided by Moody's, a
            global provider of data and information, research and insights, and
            decision <br /> solutions.
          </p>
        </div>
        <div className="hd2">
          <div className="hd2-1">
            <h2>Who We Serve</h2>
            <ul>
              <li>Banking</li>
              <li>Buy-side</li>
              <li>Insurance</li>
              <li>Corporations</li>
              <li>Public Sector</li>
            </ul>
          </div>

          <div className="hd2-1">
            <h2>Solutions</h2>
            <ul>
              <li>Ratings</li>
              <li>Investment Research</li>
              <li>Compilance & Third Party Risk</li>
              <li>Lending</li>
              <li> Financial and Regulatory</li>
              <li>Reporting</li>
              <li>Balance Sheet Management</li>
              <li>Underwriting</li>
              <li>Portfolio Management</li>
            </ul>
          </div>

          <div className="hd2-1">
            <h2>Capabilities</h2>
            <ul>
              <li>Credit Risk</li>
              <li>Climate Risk</li>
              <li>ESG Risk</li>
              <li>Cyber Risk</li>
              <li>Company Reference Data</li>
              <li>Economic Data</li>
              <li>Commercial Properties </li>
              <li>Structured Finance</li>
            </ul>
          </div>

          <div className="hd2-1">
            <h2>Contact Us</h2>
            <ul>
              <li>Careers</li>
              <li>Help & Support</li>
              <li>Contact Us</li>
              <li>Submit a Complaint</li>
            </ul>
          </div>
        </div>
        <div className="hd3">
          <div className="hd3-1">
            <h2>
              Moody's <br /> Integrity Hotline
            </h2>
            <li>Via the Internet:</li>
            <li> http://Moody's.ethicspoint.com</li>
            <li>By telephone from the United </li>
            <li>States:</li>
            <li>Dial 1-866-330-MDYS (1-866-330-</li>
            <li>6397)</li>
            <li>By telephone from outside the</li>
            <li>United States:</li>
            <li>
              Dial the AT&T Direct Dial Access*
              <li>code for your location. Then at the</li>
              <li>prompt, dial 866 -330-MDYS (866-</li>
              <li> 330-6397)</li>
            </li>
          </div>
          <div className="hd3-1">
            <h2>
              Company <br /> Information
            </h2>
            <li>About Moody's</li>
            <li>Trust Center</li>
            <li>Legal</li>
            <li>Moody's Code of Business</li>
            <li>Conduct</li>
            <li>Modern Slavery and Human</li>
            <li>Trafficking Statement</li>
            <li>Gender Pay Gap Reports</li>
          </div>
          <div className="hd3-1">
            <h2>Regulatory</h2>
            <a href="https://ratings.moodys.com/ratings-news">
              ratings.moodys.com
            </a>
          </div>
        </div>
        <div className="ftr-lst">
          <div class="footer-links">
            <a href="#">Terms of Use </a>
            <a href="#">Privacy Policy</a>
            <a href="#">Do Not Sell My Personal Information</a>
            <a href="#">Cookies Settings</a>
          </div>
          <div class="footer-copyright">
            <p>
              © 2024 Moody’s Investors Service, Inc., Moody’s Analytics, Inc.
              and/or their affiliates and licensors. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
   
{/* <AboutFooter/> */}

         </>
  )
}

export default AboutUs