"use client";
import React from "react";
import "./navbar.css";
import logo from "@/app/Images/logo.webp";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
      <div className="container-fluid">
        {/* Logo */}
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <Image
            src={logo}
            alt="Ocean Tech Logo"
            width={40}
            height={40}
            className="navbar-logo me-2"
          />
          {/* <span className="fw-bold brand-text">OCEAN TECH</span> */}
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto align-items-center">
            {/* Static Links */}
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Pages/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Pages/bulk-sms" className="nav-link">
                Bulk SMS
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Pages/otp-sms" className="nav-link">
                OTP SMS Service
              </Link>
            </li>

            {/* Products Dropdown */}
            <li className="nav-item  position-static">
              <a
                className="nav-link "
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-box"></i> Products
              </a>
              {/* <div className="dropdown-menu mega-menu shadow">
                <div className="row p-4">
                  <div className="col-md-3">
                    <h6 className="fw-bold">Messaging</h6>
                    <ul className="list-unstyled">
                      <li><Link href="/Pages/bulk-sms">Bulk SMS Promotion</Link></li>
                      <li><Link href="/Pages/sms-transaction">Bulk SMS Transaction</Link></li>
                      <li><Link href="/Pages/otp-sms">OTP SMS</Link></li>
                      <li><Link href="/Pages/international-sms">International SMS</Link></li>
                      <li><Link href="/Pages/whatsapp-sms">WhatsApp SMS</Link></li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <h6 className="fw-bold">Other Services</h6>
                    <ul className="list-unstyled">
                      <li><Link href="/Pages/mobile-database">Mobile Database</Link></li>
                      <li><Link href="/Pages/website-design">Website Designing</Link></li>
                      <li><Link href="/Pages/ivr">IVR Services</Link></li>
                      <li><Link href="/Pages/voice-call">Voice Call</Link></li>
                      <li><Link href="/Pages/email-marketing">Email Marketing</Link></li>
                    </ul>
                  </div>
                </div>
              </div> */}
            </li>

            {/* Contact */}
            <li className="nav-item">
              <Link href="/Pages/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>

          {/* Buttons */}
          <div className="d-flex align-items-center">
            <Link href="/Pages/get-started" className="btn btn-outline-dark me-2">
              Get Started
            </Link>
            <a href="tel:+919868629924" className="btn btn-primary">
              <i className="bi bi-telephone"></i> +91-9868629924
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
