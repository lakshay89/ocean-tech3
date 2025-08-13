import React from "react";
import "./footer.css";
import logo from "@/app/Images/logo.webp"
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaEnvelope, FaYoutube, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo & Contact */}
        <div className="footer-column">
          <Image src={logo} alt="OCEAN TECH" className="footer-logo" />
          <p className="footer-address">
            
            <FaMapMarkerAlt /> Mtalkz Mobility Services (P) Ltd. C-2, Sector-1 Noida, UP - 201301
          </p>
          <p><FaEnvelope /> enquiry@mtalkz.com</p>
          <p><FaPhoneAlt /> +91-98686 29924</p>

          <div className="partner-logos">
            <img src="/partner1.png" alt="IITians"/>
            <img src="/partner2.png" alt="Seal of Trust"/>
            <img src="/partner3.png" alt="Meta" />
            <img src="/partner4.png" alt="Truecaller" />
          </div>
        </div>

        {/* Products */}
        <div className="footer-column">
          <h4>PRODUCTS</h4>
          <ul>
            <li>Bulk SMS</li>
            <li>RCS Messaging</li>
            <li>WhatsApp API</li>
            <li>OTP SMS</li>
            <li>IVR Solutions</li>
            <li>WhatsApp Chatbot</li>
            <li>E-mail</li>
            <li>Enterprises</li>
            <li>Startup</li>
            <li>Developers</li>
          </ul>
        </div>

        {/* Solutions */}
        <div className="footer-column">
          <h4>SOLUTIONS</h4>
          <ul>
            <li><strong>Healthcare</strong></li>
            <li>Travel & Holidays</li>
            <li>FinTech</li>
            <li>D2C & Retail</li>
            <li>Insurance</li>
            <li>Power & Utility</li>
            <li>Logistics</li>
            <li>EdTech</li>
            <li>Political</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-column">
          <h4>RESOURCES</h4>
          <ul>
            <li>Blog</li>
            <li>Pricing</li>
            <li>Case Studies</li>
            <li>Press-Releases</li>
            <li>Client-Testimonial</li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h4>COMPANY</h4>
          <ul>
            <li>About Us</li>
            <li>Channel Partner</li>
            <li>Contact Us</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      <hr />

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2025 Mtalkz. All rights reserved.</p>
        <div className="social-icons">
          <FaFacebookF />
          <FaLinkedinIn />
          <FaWhatsapp />
          <FaEnvelope />
          <FaYoutube />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
}
