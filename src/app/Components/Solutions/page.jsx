// src/app/Components/Solutions/page.jsx

"use client";

import React from "react";
import Image from "next/image";
import solutionImg from "../../Images/current/shopify.png";
import seoImg1 from "../../Images/current/seo-7168460_19201.png";

import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

export default function page() {
  const services = [
    {
      title: "Shopify Store Design & Development",
      description:
        "Crafting visually stunning, mobile-friendly Shopify stores that reflect your brand identity and provide seamless shopping experiences.",
    },
    {
      title: "Store Optimization & Marketing",
      description:
        "Implementing SEO, conversion rate strategies, and data-driven marketing campaigns to attract, engage, and convert customers effectively.",
    },
    {
      title: "Content Creation & Product Management",
      description:
        "Providing high-quality, SEO-optimized product descriptions, engaging visuals, and content that builds trust and drives sales.",
    },
    {
      title: "Analytics & Performance Reporting",
      description:
        "Detailed evaluation of store performance and marketing campaigns with actionable insights to continuously improve revenue and customer engagement.",
    },
  ];
  const services1 = [
    {
      title: "Keyword Research",
      description:
        " Our team conducts in-depth research to find the most effective keywords for your business.",
    },
    {
      title: "On-Page Optimization ",
      description:
        "We ensure your websites structure and content are optimized for the best search results.",
    },
    {
      title: "Link Building",
      description:
        "Enhance your domain authority with high-quality backlinks from reputable sites.",
    },
    {
      title: "SEO Audit",
      description:
        "We evaluate your existing SEO strategies to pinpoint weaknesses and recommend actionable improvements for better results.",
    },
    {
      title: "Analytics & Reporting ",
      description:
        "Get detailed insights and performance reports on how your SEO strategy is performing.",
    },
    {
      title: "Local SEO ",
      description:
        "Target local customers by optimizing your business for location-based searches.",
    },
  ];

  return (<>
    <section className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0 text-center">
            <Image
              src={solutionImg}
              alt="Our Solutions"
              width={500}
              height={500}
              className="img-fluid"
              priority
            />
          </Col>
          <Col lg={6}>
            <p className="text-primary text-uppercase mb-2 fw-semibold small">

            </p>
            <h2 className="fw-bold mb-3">
              Get the best and most innovative  <br /> Shopify solutions.
            </h2>
            <p className="text-muted mb-4">
              We offer end-to-end digital services that combine creativity, technology, and strategy to grow your online store. From Shopify store design and development to SEO, social media, and eCommerce optimization — we help businesses boost sales, improve user experience, and expand their digital footprint.
            </p>
            {services.map((item, index) => (
              <div className="d-flex align-items-start mb-4" key={index}>
                <div
                  className="me-3 d-flex justify-content-center align-items-center flex-shrink-0"
                  style={{
                    width: "40px",
                    height: "40px",
                    minWidth: "40px", // ✅ ensures it doesn't shrink
                    minHeight: "40px",
                    backgroundColor: "rgba(113, 170, 255, 1)",
                    borderRadius: "50%", // ✅ makes it perfectly round
                    color: "#124bdb",
                    fontSize: "18px",
                  }}
                >
                  <FaCheckCircle />
                </div>
                <div>
                  <h6 className="mb-1 fw-bold">{item.title}</h6>
                  <p className="mb-0 text-muted small">{item.description}</p>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>



      <Container className="mt-5">
        <Row className="align-items-center ">

          <Col lg={6}>
            {/* <p className="text-primary text-uppercase mb-2 fw-semibold small">
              OUR SOLUTIONS
            </p> */}
            <h2 className="fw-bold mb-3">
              What is Search Engine Optimization (SEO) ?
            </h2>
            <p className="text-muted mb-4">
              Our SEO services ensure that your business ranks higher in search results, driving organic traffic and potential customers to your website. With a proven track record, TheClickFunnel offers expert solutions in keyword research, on-page SEO, link-building, and more. Unlock the full potential of your website and boost your search rankings with our expert SEO services.

            </p>
            {services1.map((item, index) => (
              <div className="d-flex align-items-start mb-4" key={index}>
                <div
                  className="me-3 d-flex justify-content-center align-items-center flex-shrink-0"
                  style={{
                    width: "40px",
                    height: "40px",
                    minWidth: "40px", // ✅ ensures it doesn't shrink
                    minHeight: "40px",
                    backgroundColor: "rgba(113, 170, 255, 1)",
                    borderRadius: "50%", // ✅ makes it perfectly round
                    color: "#124bdb",
                    fontSize: "18px",
                  }}
                >
                  <FaCheckCircle />
                </div>
                <div>
                  <h6 className="mb-1 fw-bold">{item.title}</h6>
                  <p className="mb-0 text-muted small">{item.description}</p>
                </div>
              </div>
            ))}
          </Col>

          <Col lg={6} className="mb-4 mb-lg-0 text-center">
            <Image
              src={seoImg1}
              alt="Our Solutions"
              width={500}
              height={500}
              className="img-fluid"
              priority
            />
          </Col>
        </Row>
      </Container>
    </section>



  </>
  );
}
