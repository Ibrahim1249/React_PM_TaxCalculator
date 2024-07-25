
import footerLogo from "../assets/Images/FooterLogo.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { IconContext } from "react-icons";
import footerImg from "../assets/Images/Frame 1000005166.png";

function Footer() {
  return (
    <>
         <footer className="footer">
      <div className="footer-content">
        <div className="footer-header">
           <img src={footerLogo} alt="" className="logo"/>
          <div className="social-icons">
          <IconContext.Provider value={{ color: "#2997F9", size: "22px" }}>
                <FaSquareXTwitter />
                <IoLogoYoutube />
                <FaFacebook />
                <FaLinkedin />
                <IoMdContact />
              </IconContext.Provider>
          </div>
        </div>
        
        <hr />
        
        <div className="footer-links">
          <div className="footer-column">
            <h3>Crypto Taxes for</h3>
            <ul>
              <li>Individuals and investors</li>
              <li>Tax Professionals and Accountants</li>
              <li>Exchanges and Web3 projects</li>
            </ul>
            <img src={footerImg} alt="Certification" className="certification-image" />
          </div>
          
          <div className="footer-column">
            <h3>Free Tools</h3>
            <ul>
              <li>Crypto Prices Live</li>
              <li>Crypto Tax Calculator</li>
              <li>Crypto Tax Saving Speculator</li>
              <li>Crypto Profit Calculator</li>
              <li>Crypto Converter</li>
              <li>Crypto Staking ROI Calculator</li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Resource Center</h3>
            <ul>
              <li>Crypto Tax Guides</li>
              <li>Dumb Ways To Lose Money</li>
              <li>Crypto Tax Savings Guide</li>
              <li>Blogs</li>
              <li>Crypto Buying Guides</li>
              <li>Crypto Staking Guides</li>
              <li>Crypto Mining Guides</li>
              <li>Crypto Price Predictions</li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Help And Support</h3>
            <ul>
              <li>Product Guides</li>
              <li>How To Guides</li>
              <li>Templates</li>
              <li>Contact us</li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Backed by</li>
              <li>Media and Press</li>
              <li>Careers <span className="hiring-badge">We're hiring</span></li>
              <li>Security</li>
              <li>Refund Policy</li>
              <li>Brand Assets</li>
              <li>Terms of use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        
        <hr />
        
        <div className="footer-bottom">
          <p>© All rights reserved by Simplify Infotech Pvt. Ltd.</p>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;
