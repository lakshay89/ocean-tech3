"use client";
import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

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

          <ul className="list-unstyled">
            <li className="mb-2">
              <Link href="/Pages/bulk-sms-promotion" className="text-light text-decoration-none d-block">
                Bulk SMS Promotion
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/Pages/bulk-sms-transactional" className="text-light text-decoration-none d-block">
                Bulk SMS Transaction
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/Pages/otp-sms" className="text-light text-decoration-none d-block">
                OTP SMS
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/Pages/about" className="text-light text-decoration-none d-block">
                About
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/Pages/bulk-sms-whatsapp" className="text-light text-decoration-none d-block">
                WhatsApp SMS
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/Pages/bulk-sms" className="text-light text-decoration-none d-block">
               Bulk SMS
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/Pages/dtl-service" className="text-light text-decoration-none d-block">
                DTL Service
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/Pages/ivr-services" className="text-light text-decoration-none d-block">
                IVR Services
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/Pages/voice-call" className="text-light text-decoration-none d-block">
                Voice Call
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/Pages/bulk-email" className="text-light text-decoration-none d-block">
                Bulk Email
              </Link>
            </li>
          </ul>


        </div>

        {/* Column 3 - Digital Marketing & Policy Info */}
        <div className="footer-col">

          <h4 className="">Policy Info.</h4>
          <ul>
            <li><Link href="/Pages/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/Pages/term-conditions">Term & Condition</Link></li>
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
