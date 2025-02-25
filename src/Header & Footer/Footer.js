import React from "react";
import { Link } from 'react-router-dom';
import "./Footer.css";
const Footer = () => {
  return (
    <div className="container">
      <div className="footer-container">
        <footer className="footer">
          <div className="footer-section">
            <h4><strong>Our Links:</strong></h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/advertisemodel">Advertise</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/model">Free Listing</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4><strong>Contact Us:</strong></h4>
            <p>Phone: +919975288300</p>
            <p>E-mail: help@nagpurdial.com</p>
          </div>
          <div className="footer-section">
            <h4><strong>Follow us on:</strong></h4>
            <div className="social-media">
              <Link
                to="https://www.facebook.com/pskitservices/"
                className="social-icon facebook"
                aria-label="Facebook"
              >
                <i className="fa fa-facebook-f"></i>
              </Link>
              <Link
                to="https://www.instagram.com/nagpurdial2023/?hl=en"
                className="social-icon instagram"
                aria-label="Instagram"
              >
                <i className="fa fa-instagram"></i>
              </Link>
              <Link
                to="https://www.linkedin.com/in/nagpur-dial-7b2aa8193/"
                className="social-icon linkedin"
                aria-label="LinkedIn"
              >
                <i className="fa fa-linkedin"></i>
              </Link>
              <Link
                to="https://www.youtube.com/channel/UCtvy5OqTnh5I8kiOkgoAb9Q?view_as=subscriber"
                className="social-icon youtube"
                aria-label="YouTube"
              >
                <i className="fa fa-youtube"></i>
              </Link>
              <Link
                to="https://x.com/Nagpur_Dial"
                className="social-icon twitter"
                aria-label="Twitter"
              >
                <i className="fa fa-twitter"></i>
              </Link>
              <Link
                to="https://in.pinterest.com/nagpurdial/"
                className="social-icon pinterest"
                aria-label="Pinterest"
              >
                <i className="fa fa-pinterest-p"></i>
              </Link>
            </div>
          </div>
        </footer>
        <hr />
        <div className="footer-bottom">
          <p className="copyright">
            <strong>Copyright © 2024</strong>{" "}
            <i className="fa fa-heart" style={{ color: "red" }}></i>{" "}
            <Link to="https://pskitservices.com/">
              Design By Psk Technologies Pvt. Ltd
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
