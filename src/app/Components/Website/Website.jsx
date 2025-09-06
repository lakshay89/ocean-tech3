"use client";
import React from "react";
import "./website.css";
import Image from "next/image";

import seoImg from "../../Images/current/Marketingconsulting-amico11.png";
// import keyword from '../../Images/Banners/banner1.png';
// import onpage from '../../Images/Banners/banner1.png';
// import link from '../../Images/Banners/banner1.png';
// import audit from '../../Images/Banners/banner1.png';
// import analytics from '../../Images/Banners/banner1.png';
// import local from '../../Images/Banners/banner1.png';
import Link from "next/link";

const seoFeatures = [
  {
    img: "/gif/seo1.gif",
    title: "Custom Website Design",
    desc: "Unique, creative, and modern website designs tailored to your brand identity and target audience.",
  },
  {
    img: "/gif/smo2.gif",
    title: "Responsive Web Development",
    desc: "We build mobile-friendly, responsive websites that perform seamlessly across all devices and browsers.",
  },
  {
    img: "/gif/seo3.gif",
    title: "E-Commerce Development",
    desc: "From product listings to secure checkout, we create powerful e-commerce websites that drive online sales.",
  },
  {
    img: "/gif/smo4.gif",
    title: "WordPress Development",
    desc: "Easy-to-manage, scalable, and SEO-ready WordPress websites designed for businesses of all sizes.",
  },
  {
    img: "/gif/smo5.gif",
    title: "Shopify Website",
    desc: "Scalable, easy-to-manage, and conversion-focused Shopify stores built to grow businesses of every size.",
  },
  {
    img: "/gif/smo6.gif",
    title: "UI/UX Design",
    desc: "Our designers focus on creating intuitive and engaging experiences that keep visitors hooked.",
  },
];

export default function Website() {
  return (
    <section className="seo-section py-5 px-3">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <Image src={seoImg} alt="SEO" className="img-fluid rounded w-75" />
          </div>
          <div className="col-lg-6">
            <h4 className="fw-bold text-black w-75 fs-3 mb-4">
              Why Your Business Needs a
              <br />{" "}
              <span style={{ color: "#124bdb" }}>Professional Website</span>
            </h4>
            <p className="text-light text-black w-75">
              we create websites that are not only visually stunning but also
              fast, user-friendly, and built to convert. Your website is the
              first impression of your business online—and we make sure it
              leaves a lasting one. From sleek business websites to fully
              functional e-commerce stores, our Website Design & Development
              services help your brand stand out in the digital world. A website
              is more than just an online presence—it s your digital storefront.
              A professionally designed and optimized website
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid  bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="mb-5">
              <h3
                className="text-pink fw-bold mb-2"
                style={{ color: "#124bdb" }}
              >
                Our Website Design & Development Services
              </h3>
              <p className="text-light text-black">
                A website is more than just an online presence—it s your digital
                storefront. A professionally designed and optimized website.
              </p>
            </div>
            {seoFeatures.map((feature, idx) => (
              <div className="col-md-6 col-lg-4 mb-4" key={idx}>
                <div
                  className="card h-100 border-0 rounded-4 p-3 shadow-sm seo-card"
                  style={{
                    background:
                      "linear-gradient(179deg, rgba(10, 74, 220, 1) 18%, rgba(24, 151, 235, 1) 70%)",
                  }}
                >
                  <img
                    src={feature.img}
                    alt={feature.title}
                    // width={120}
                    // height={120}
                    className="mb-3 gif-img"
                  />
                  <h5 className="fw-semibold text-white">{feature.title}</h5>
                  <p className="small text-white">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row my-5">
          <div className="col-12 d-flex align-items-center flex-column">
            <h2 className="text-pink fw-bold mb-2 text-center fs-1 pb-2">
              Build a Website That Works for You
            </h2>
            <p className="text-uppercase text-black mb-3 text-center ">
              we don t just design websites—we build digital experiences that
              help businesses grow. Whether you need a corporate website, a
              portfolio, or a full-fledged online store, our Website Design &
              Development services deliver performance, style, and results.
              Ready to create a website that truly represents your business?
              Let s build it together.
            </p>
            <Link href="/Pages/contact">
              <button className="btn-primary btn mx-3 px-4 py-2 fw-semibold">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* <div className="text-center mt-4">
          <a href="/contact" className="btn btn-pink px-4 py-2 fw-bold">Get SEO Help</a>
        </div> */}
      </div>
    </section>
  );
}
