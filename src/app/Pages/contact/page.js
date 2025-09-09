

"use client";
import GoogleMap from "@/app/Components/GoogleMap/GoogleMap";
import InquiaryForm from "@/app/Components/InquiaryForm/InquiaryForm";
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export default function ContactUs() {
  return (
    <section className="contact-us py-5 bg-white text-dark mb-5 d-flex align-items-center justify-content-center">
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <h2 className="text-center text-primary mb-4 fw-bold">CONTACT US | OCEANTECHZONE </h2>
        <p className="text-center mb-5 text-secondary w-75">
          Thanks for your interest in <strong>Ocean Techzone</strong>. We ll be happy to hear from you.
          Kindly use this form to share your query and we shall get back to you shortly.
        </p>

        <Row>
          {/* Left Side - Contact Info */}
          <Col md={6} className="mb-4">
            <h2 className="fw-semibold">Get in Touch</h2>
            <p className="text-muted">
              For any inquiries or support related to our SEO, SMO, Website Development, Digital Marketing
              feel free to reach out. We are here to help!
            </p>

            {/* <p><FaMapMarkerAlt className="me-2 text-primary" /> F318, OLD MB ROAD, LADO SARAI, NEW DELHI 110030</p> */}
            <p><FaEnvelope className="me-2 text-primary" /> <a href="mailto:info@oceantechzone.com" className="text-decoration-none text-dark">info@oceantechzone.com</a></p>
            <p><FaPhone className="me-2 text-primary" /> <a href="tel:+919289933499" className="text-decoration-none text-dark">+91 9289933499</a></p>

            <p className="mt-4">Follow us:</p>
            <div className="d-flex gap-3 fs-4 pb-2">
              <a href="https://www.facebook.com/Promotionkiduniya/" className="text-dark hover-opacity"><FaFacebook /></a>
              <a href="https://www.instagram.com/oceantechzone?igsh=bXp6NmJqZnM0cnhm" className="text-dark hover-opacity"><FaInstagram /></a>
              <a href="https://www.linkedin.com/company/ocean-tech-zone/" className="text-dark hover-opacity"><FaLinkedin /></a>
              <a href="https://www.youtube.com/channel/UC1RKOYMU2fW13keNQmZLKyQ" className="text-dark hover-opacity"><FaYoutube /></a>
            </div>


            <GoogleMap />

          </Col>

          {/* Right Side - Form */}
          <Col md={6}>
            <div className="p-4 rounded ">

              {/* <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Name<span className="text-danger">*</span></Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email<span className="text-danger">*</span></Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone<span className="text-danger">*</span></Form.Label>
                  <Form.Control type="text" placeholder="Enter your phone number" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Company</Form.Label>
                  <Form.Control type="text" placeholder="Your company name" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Service Interested In</Form.Label>
                  <Form.Select>
                    <option>Select Service</option>
                    <option>Bulk SMS Service</option>
                    <option>Bulk SMS Promotion</option>
                    <option>Otp SMS Service</option>
                    <option>WhatsApp Sms Service</option>
                    <option>Voice Call Service</option>
                    <option>IVR Service</option>
                    <option>Bulk Email Marketing</option>
                    <option>Bulk Sms Transactional</option>
                    <option>Rcs Service</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Let us know how we can help" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    label="I agree to receive messages via WhatsApp, RCS, Email, and other channels."
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  SUBMIT REQUEST
                </Button>
              </Form> */}
              <h4 className="mb-4 text-primary ">Request a Callback</h4>
              <InquiaryForm />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Hover Style (Inline or move to global CSS) */}
      <style jsx>{`
        .hover-opacity:hover {
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }
      `}</style>
    </section>
  );
}
