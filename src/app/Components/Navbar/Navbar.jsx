import React from "react";
import "./navbar.css";
import logo from '@/app/Images/logo.webp'
import Image from "next/image";

export default function Navbar() {
  return (
  <>
    <nav className="navbar navbar-expand-lg navbar-light  shadow-sm">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <Image src={logo} alt="Logo" className="navbar-logo me-2" />
          {/* <span className="fw-bold brand-text">OCEAN TECH</span> */}
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto align-items-center">

            {/* Static Links */}
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>

            {/* Products Dropdown */}
            <li className="nav-item dropdown position-static">
              <a className="nav-link dropdown-toggle" href="#">
                <i className="bi bi-box"></i> Products
              </a>
              <div className="dropdown-menu mega-menu">
                <div className="row p-4">
                  <div className="col-md-3">
                    <h6 className="fw-bold">Messaging</h6>
                    <ul className="list-unstyled">
                      <li>Bulk SMS Promotion</li>
                      <li>Bulk SMS Transaction</li>
                      <li>OTP SMS</li>
                      <li>International SMS</li>
                      <li>WhatsApp SMS</li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <h6 className="fw-bold">Other Services</h6>
                    <ul className="list-unstyled">
                      <li>Mobile Database</li>
                      <li>Website Designing</li>
                      <li>IVR Services</li>
                      <li>Voice Call</li>
                      <li>Email Marketing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* Solutions Dropdown */}
            <li className="nav-item dropdown position-static">
              <a className="nav-link dropdown-toggle" href="#">
                <i className="bi bi-lightbulb"></i> Solutions
              </a>
              <div className="dropdown-menu mega-menu">
                <div className="row p-4">
                  <div className="col-md-3">
                    <h6 className="fw-bold">Digital Marketing</h6>
                    <ul className="list-unstyled">
                      <li>Search Engine Optimization</li>
                      <li>Social Media Optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* Services (Normal Link) */}
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>

            {/* Blog (Normal Link) */}
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>

            {/* Company Dropdown */}
            <li className="nav-item dropdown position-static">
              <a className="nav-link dropdown-toggle" href="#">
                <i className="bi bi-building"></i> Company
              </a>
              <div className="dropdown-menu mega-menu">
                <div className="row p-4">
                  <div className="col-md-3">
                    <h6 className="fw-bold">Policy Info</h6>
                    <ul className="list-unstyled">
                      <li>Privacy Policy</li>
                      <li>Terms & Conditions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* Contact (Normal Link) */}
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>

          {/* Buttons */}
          <div className="d-flex align-items-center">
            <button className="btn btn-outline-dark me-2">Get Started</button>
            <a href="tel:+919868629924" className="btn btn-primary">
              <i className="bi bi-telephone"></i> +91-9868629924
            </a>
          </div>
        </div>
      </div>
    </nav>
  
  </>
  );
}
