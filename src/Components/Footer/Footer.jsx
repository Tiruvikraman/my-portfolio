import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/logo.png";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>I'am AI developer</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your Email" input/>
          </div>
          <div className="footer-subs"><a href="https://www.linkedin.com/in/tiru-v/">Connect</a></div>
        </div>
      </div>
      <hr/>
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025. All Rights Reserved.</p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
