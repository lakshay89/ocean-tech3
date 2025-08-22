"use client";
import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,  FaLinkedin, FaYoutube } from "react-icons/fa";

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
            {/* <p className="tagline">The SMS leader...</p>  */}
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
            {/* <a href="mailto:info@oceantechzone.com">
              <FaEnvelope size={20} />
            </a> */}
          </div>
        </div>

        {/* Column 2 - Services */}
        <div className="footer-col">
          <h4>Services</h4>

          <ul className="list-unstyled">
            <li className="mb-2">
              <Link
                href="/Pages/bulk-sms-promotion"
                className="text-light text-decoration-none d-block"
              >
                Bulk SMS Promotion
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/Pages/bulk-sms-transactional"
                className="text-light text-decoration-none d-block"
              >
                Bulk SMS Transaction
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/Pages/otp-sms"
                className="text-light text-decoration-none d-block"
              >
                OTP SMS
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/Pages/about"
                className="text-light text-decoration-none d-block"
              >
                About
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/Pages/bulk-sms-whatsapp"
                className="text-light text-decoration-none d-block"
              >
                WhatsApp SMS
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/Pages/bulk-sms"
                className="text-light text-decoration-none d-block"
              >
                Bulk SMS
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/Pages/dtl-service"
                className="text-light text-decoration-none d-block"
              >
                DTL Service
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/Pages/ivr-services"
                className="text-light text-decoration-none d-block"
              >
                IVR Services
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/Pages/voice-call"
                className="text-light text-decoration-none d-block"
              >
                Voice Call
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/Pages/bulk-email"
                className="text-light text-decoration-none d-block"
              >
                Bulk Email
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Digital Marketing & Policy Info */}
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
              <FaMapMarkerAlt /> F318, OLD MB ROAD, LADO SARAI, NEW DELHI 110030
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
    </footer>
  );
}
