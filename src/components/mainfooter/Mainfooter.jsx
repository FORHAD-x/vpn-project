import React from 'react'
import './Mainfooter.css'
import { TiSocialFacebookCircular } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti";
const Mainfooter = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h3 className="footer-logo"><img src="image/Logo.png" alt="" /></h3>
          <p className="footer-description">
            LaslesVPN is a private virtual network that has unique features and has high security.
          </p>
          <div className="footer-social-icons">
            <a href="#" className="social-icon">
            <TiSocialFacebookCircular />
            </a>
            <a href="#" className="social-icon">
            <AiFillTwitterCircle />
            </a>
            <a href="#" className="social-icon">
            <TiSocialInstagram />
            </a>
          </div>
          <p className="footer-copyright">&copy;2020LaslesVPN</p>
        </div>

        {/* Product Links */}
        <div className="footer-section">
          <h4>Product</h4>
          <ul>
            <li><a href="#">Download</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Locations</a></li>
            <li><a href="#">Server</a></li>
            <li><a href="#">Countries</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Engage Links */}
        <div className="footer-section">
          <h4>Engage</h4>
          <ul>
            <li><a href="#">LaslesVPN?</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        {/* Earn Money Links */}
        <div className="footer-section">
          <h4>Earn Money</h4>
          <ul>
            <li><a href="#">Affiliate</a></li>
            <li><a href="#">Become Partner</a></li>
          </ul>
        </div>
      </div>
    </footer>
</>

  );
};
export default Mainfooter