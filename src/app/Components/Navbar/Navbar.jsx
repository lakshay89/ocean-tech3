'use client';

import React from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import logo from '../../Images/logo.jpg';
import Image from 'next/image';
import './navbar.css'
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";

// Create Navbar.css in the same folder

export default function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary px-3">
      <Container fluid>
        {/* Left: Logo */}
        <Navbar.Brand href="/">
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

              <NavDropdown.Item href="/Pages/seo">Search Engine Optimization</NavDropdown.Item>
              <NavDropdown.Item href="/Pages/Website-Design">Website Designing</NavDropdown.Item>
              <NavDropdown.Item href="/Pages/Socialmedia">Social Media Optimization</NavDropdown.Item>
              <NavDropdown.Item href="/Pages/Content">Content Marketing</NavDropdown.Item>
              <NavDropdown.Item href="/Pages/Email">Email & WhatsApp Marketing</NavDropdown.Item>
              <NavDropdown.Item href="/Pages/Advertising">Pay-Per-Click Advertising</NavDropdown.Item>
              {/* <NavDropdown.Item href="/Pages/bulk-sms-whatsapp">Whatsapp Sms Service</NavDropdown.Item>
              <NavDropdown.Item href="/Pages/voice-call">Voice Call Service</NavDropdown.Item>
              <NavDropdown.Item href="/Pages/ivr-services">IVR Service</NavDropdown.Item>
              <NavDropdown.Item href="/Pages/bulk-email">Bulk Email Marketing</NavDropdown.Item> */}
              {/* <NavDropdown.Item href="/Pages/dtl-service">DTL Service</NavDropdown.Item> */}
              {/* <NavDropdown.Item href="/Pages/rcs-services">RCS Service</NavDropdown.Item>
              <NavDropdown.Item href="/Pages/bulk-sms-transactional">Bulk Sms Transactional</NavDropdown.Item> */}
              {/* <NavDropdown.Item href="#app-dev">Bulk Sms Transaction</NavDropdown.Item> */}
            </NavDropdown>

            {/* <Nav.Link href="/Pages/dtl-service">DLT Services</Nav.Link> */}
            <Nav.Link href="/Pages/contact">Contact Us</Nav.Link>
            <Nav.Link href="/Pages/blogs">Blogs</Nav.Link>

          </Nav>

          {/* Right: Buttons */}
          <div className="d-flex gap-2">

            <Button as="a" href="tel:+919289933499" variant="primary">Call Us</Button>
            <Link href='/Pages/contact'>
              <Button variant="outline-primary">
                Book Your Consultation
              </Button>
            </Link>
          </div>



        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
