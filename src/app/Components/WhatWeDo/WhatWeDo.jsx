"use client";
import React from "react";
import "./whatWeDo.css";

export default function WhatWeDo() {
  return (
    <section className="what-we-do-section py-5">
      <div className="container">
        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">
            We specialize in delivering high-quality Bulk SMS services tailored to enhance your business communication strategy.
            Our platform includes features like high delivery rates, real-time tracking, and customizable messaging options,
            ensuring your messages reach the right audience at the right time.
          </p>
        </div>

        {/* Vision Section */}
        <div className="mb-5">
          <h3 className="fw-bold text-center mb-3">
            Why Choose Us for Your Trusted Business Growth Partner
          </h3>
          <h5 className="vision-title text-center">Our Vision – Shaping the Future with Innovation and Excellence</h5>
          <p className="vision-text">
            To be the global leader in bulk SMS solutions, we aim to transform the way people communicate by upholding the highest
            standards of reliability, innovation, and customer satisfaction. Our vision is a world where businesses of all sizes can
            leverage the power of SMS to create stronger connections, boost growth, and provide outstanding value to their customers.
            Through ongoing advancements in technology and expanding our services, we seek to shape the future of messaging and become
            the trusted partner for organizations looking to enhance their communication strategies.
          </p>
        </div>

        {/* Cards Section */}
        <div className="row g-4 mb-5">
          <div className="col-md-6 col-lg-4">
            <div className="feature-card card-1 h-100">
              <span className="feature-number">01</span>
              <h5>Local Expertise</h5>
              <p>
                Our team has extensive knowledge of the Delhi market, enabling us to help you design effective SMS campaigns
                specifically tailored to your target audience.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="feature-card  card-2 h-100">
              <span className="feature-number">02</span>
              <h5>High Conversion Rates</h5>
              <p>
                SMS has an excellent 98% open rate, higher than other marketing channels like email and social media, leading to
                quicker conversions.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="feature-card card-3 h-100">
              <span className="feature-number">03</span>
              <h5>Cost-Effective Alternative</h5>
              <p>
                SMS marketing is more affordable compared to costly methods like direct mail, email campaigns, or paid ads. Perfect
                for SMEs.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="feature-card card-5 h-100">
              <span className="feature-number">04</span>
              <h5>24/7 Availability</h5>
              <p>
                Our service is available around the clock, enabling businesses to provide support and share information anytime.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="feature-card card-6 h-100">
              <span className="feature-number">05</span>
              <h5>Instant Delivery</h5>
              <p>
                Your SMS messages are delivered within seconds, ensuring real-time communication for promotions, OTPs, alerts, and
                updates.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mission-section text-center">
          <h3 className="fw-bold mb-3">OUR MISSION</h3>
          <p>
            Our mission is to empower businesses with innovative and reliable SMS solutions that drive engagement, enhance
            communication, and optimize customer relationships. Through our state-of-the-art bulk SMS platform, we deliver seamless
            transactional and promotional messaging services that enable our clients to connect with their audience effectively and
            efficiently. We are committed to providing exceptional service, cutting-edge technology, and unparalleled support to help
            businesses achieve their goals and grow their brand.
          </p>
        </div>
      </div>
    </section>
  );
}
