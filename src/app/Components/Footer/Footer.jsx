"use client";
import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 - Logo, Description, Social */}
        <div className="footer-col">
          <div className="footer-logo-box">
            <div className="logo-text">
              <span className="logo-icon"> ✉    OCEAN TECH ZONE </span>
            </div>
            {/* <p className="tagline">The SMS leader...</p>  */}
          </div>
          <p className="footer-desc">
            Our focus lies in targeted marketing, customer care, customer voice, and professional services that allow our clients to move beyond messaging to create a meaningful dialogue with the customers.
          </p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Column 2 - Services */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Bulk SMS Promotion</li>
            <li>Bulk SMS Transaction</li>
            <li>OTP SMS</li>
            <li>International SMS</li>
            <li>WhatsApp SMS</li>
            <li>Mobile Database</li>
            <li>Website Designing</li>
            <li>IVR Services</li>
            <li>Voice Call</li>
            <li>Email Marketing</li>
          </ul>
        </div>

        {/* Column 3 - Digital Marketing & Policy Info */}
        <div className="footer-col">
          <h4>Digital Marketing</h4>
          <ul>
            <li>Search Engine Optimization (SEO)</li>
            <li>Social Media Optimization (SMO)</li>
          </ul>
          <h4 className="mt-4">Policy Info.</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Term & Condition</li>
          </ul>
        </div>

        {/* Column 4 - Contacts */}
        <div className="footer-col">
          <h4>Contacts</h4>
          <ul className="contact-list">
            <li><FaMapMarkerAlt /> F318, OLD MB ROAD, LADO SARAI, NEW DELHI 110030</li>
            <li><FaPhoneAlt /> +91 9289933499</li>
            <li><FaEnvelope /> info@oceantechzone.com</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
