import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.quickbite1} alt="" className="quickbite" />
          <p>
          Fast, reliable food delivery from your favorite restaurants. Savor fresh meals at home with just a few taps. Download the app today and enjoy delicious food delivered quickly and conveniently!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-9173341274</li>
            <li>+91-7801946035</li>
            <li>contact@Quickbite.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">
        Copyright 2024 &copy; Quickbite.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
