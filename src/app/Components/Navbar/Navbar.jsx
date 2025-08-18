'use client';

import React from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import logo from '../../Images/logoimg.jpg';
import Image from 'next/image';
import './navbar.css'
import { RiArrowDropDownLine } from "react-icons/ri";

import './Navbar.css'; // 👈 Make sure you import the custom styles
// Create Navbar.css in the same folder

export default function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary px-3">
      <Container fluid>
        {/* Left: Logo */}
        <Navbar.Brand href="#">
          <Image src={logo} width={170} alt="logo" />
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll" className="justify-content-between w-100">
          {/* Center: Nav Links */}
          <Nav className="mx-auto gap-2">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Pages/about">About us</Nav.Link>

            {/* Custom Dropdown with icon */}
              <NavDropdown
                  title={
                    <span className="d-flex align-items-center gap-1">
                      Services <RiArrowDropDownLine size={25} />
                    </span>
                  }
                  id="services-dropdown"
                  className="custom-dropdown"
                >

              <NavDropdown.Item href="#web-dev">Bulk Sms Promotion</NavDropdown.Item>
              <NavDropdown.Item href="#app-dev">Bulk Sms Transaction</NavDropdown.Item>
              <NavDropdown.Item href="#seo">Otp Sms Service</NavDropdown.Item>
              <NavDropdown.Item href="#custom-service">Whatsapp Sms Service</NavDropdown.Item>
              <NavDropdown.Item href="#custom-service">DTL Service</NavDropdown.Item>
              <NavDropdown.Item href="#custom-service">Website Design</NavDropdown.Item>
              <NavDropdown.Item href="#custom-service">IVR Service</NavDropdown.Item>
              <NavDropdown.Item href="#custom-service">Voice Call Service</NavDropdown.Item>
              <NavDropdown.Item href="#custom-service">Bulk Email Marketing</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#dlt">DLT Services</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>

          {/* Right: Buttons */}
          <div className="d-flex gap-2">
            <Button variant="outline-primary">+91 9289933499</Button>
            <Button variant="primary">Call Us</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
