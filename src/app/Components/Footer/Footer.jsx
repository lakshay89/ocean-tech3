"use client";
import React from "react";
import "./footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 - Logo, Description, Social */}
        <div className="footer-col">
          <div className="footer-logo-box">
            <div className="logo-text">
              <span className="logo-icon"> ✉ OCEAN TECH ZONE </span>
            </div>
          </div>
          <p className="footer-desc">
            Our focus lies in targeted marketing, customer care, customer voice,
            and professional services that allow our clients to move beyond
            messaging to create a meaningful dialogue with the customers.
          </p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/Promotionkiduniya/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/oceantechzone?igsh=bXp6NmJqZnM0cnhm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/ocean-tech-zone/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.youtube.com/channel/UC1RKOYMU2fW13keNQmZLKyQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Column 2 - Services */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul className="list-unstyled">
            <li className="mb-2">
              <Link
                href="/Pages/seo"
                className="text-light text-decoration-none d-block"
              >
                Search Engine Optimization
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/Pages/Socialmedia"
                className="text-light text-decoration-none d-block"
              >
                Social Media Optimization
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/Pages/Website-Design"
                className="text-light text-decoration-none d-block"
              >
                Website Designing
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/Pages/Content"
                className="text-light text-decoration-none d-block"
              >
                Content Marketing
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/Pages/Email"
                className="text-light text-decoration-none d-block"
              >
                Email & WhatsApp Marketing
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/Pages/Advertising"
                className="text-light text-decoration-none d-block"
              >
                Pay-Per Click Advertising
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Policy Info */}
        <div className="footer-col">
          <h4 className="">Policy Info.</h4>
          <ul className="list-unstyled">
            <li>
              <Link
                href="/Pages/privacy-policy"
                className="text-light text-decoration-none d-block"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/Pages/term-conditions"
                className="text-light text-decoration-none d-block"
              >
                Term & Condition
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 - Contacts */}
        <div className="footer-col">
          <h4>Contacts</h4>
          <ul className="contact-list list-style-none">
            <li>
              <FaMapMarkerAlt /> OLD MB ROAD, LADO SARAI, NEW DELHI 110030
            </li>
            <li>
              <FaPhoneAlt /> +91 9289933499
            </li>
            <li>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@oceantechzone.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <FaEnvelope /> info@oceantechzone.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />

      {/* Copyright Section */}
      <div className="footer-bottom text-center mt-2 mb-0">
        <p style={{ margin: 0, fontSize: "14px", color: "#ccc" }}>
          <Link href="https://www.oceantechzone.com/" className="text-decoration-none text-light" target="_blank" rel="noopener noreferrer">
            © 2025 Ocean Tech Zone. All rights reserved.
          </Link>
        </p>
      </div>
    </footer>
  );
}
