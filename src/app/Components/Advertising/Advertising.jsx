"use client";
import React, { useState } from "react";
// import axios from "axios"; // keep if you plan to send data to backend
import "./Advertising.css";

// import InquiaryForm from "../InquiaryForm/InquiaryForm";
import Link from "next/link";
import Image from "next/image";
import img1 from "../../Images/current/p3.png";
import seoImg from "../../Images/current/p1.png";

const seoFeatures = [
  {
    img: "/gif/seo1.gif",
    title: "Google Ads Management",
    desc: "We create high-performing campaigns including Search Ads, Display Ads, Shopping Ads, and YouTube Ads that put your business in front of active searchers",
  },
  {
    img: "/gif/smo2.gif",
    title: "Meta Ads (Facebook & Instagram Advertising)",
    desc: "Engage with your audience using highly targeted ads on Facebook and Instagram—perfect for increasing brand awareness, engagement, and sales.",
  },
  {
    img: "/gif/seo3.gif",
    title: "Campaign Strategy & Setup",
    desc: "From keyword research to audience targeting, we set up campaigns tailored to your goals—whether that’s leads, sales, or traffic.",
  },
  {
    img: "/gif/smo4.gif",
    title: "Landing Page Optimization",
    desc: "A great ad deserves a great landing page. We design and optimize landing pages that maximize conversions.",
  },
  {
    img: "/gif/smo5.gif",
    title: "A/B Testing & Optimization",
    desc: "We continuously test ad creatives, headlines, and calls-to-action to improve click-through rates and ROI.",
  },
  {
    img: "/gif/smo2.gif",
    title: "Retargeting Campaigns",
    desc: "Re-engage users who visited your website or social media but didn’t convert—turning lost opportunities into loyal customers.",
  },
  {
    img: "/gif/smo6.gif",
    title: "PPC Analytics & Reporting",
    desc: "Get detailed insights with transparent reports on clicks, conversions, ROI, and cost-per-acquisition (CPA) so you know exactly how your budget is performing.",
  },
];
export default function Advertising() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/contact", formData);
      console.log("Response:", res.data);

      setFormData({ name: "", phone: "", email: "", message: "" });
      alert("Form submitted successfully!");
    } catch (err) {
      console.error(err);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <>
      <div className="SMS-Transection-MainSec py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Section */}
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="SMStitle text-left mb-3">
                <h1 className="fw-bold">
                  <span className="titlebold text-left">
                    Pay-Per-Click Advertising{" "}
                  </span>
                  (Google Ads & Meta Ads) Services
                </h1>
              </div>
              <div className="SMS-Content">
                <p className="text-muted mb-4">
                  we believe in results you can see. Our Pay-Per-Click (PPC)
                  advertising services help businesses generate instant traffic,
                  quality leads, and higher conversions with smartly optimized
                  ad campaigns on Google Ads, Facebook, and Instagram (Meta
                  Ads).{" "}
                </p>
                <Link href="/Pages/contact" className="text-decoration-none">
                  <button className="btn themebacground text-light px-4">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Section */}
            <div className="col-md-6 justify-content-center align-items-center d-flex">
              <Image src={img1} className="img-fluid" alt="Website Design" />
            </div>
          </div>
        </div>
      </div>
      <section className="seo-section py-5 px-3">
        <div className="container">
          {/* <h2 className="text-center text-pink fw-bold mb-2">
                Search Engine Optimization (SEO)
              </h2> */}
          {/* <hr className="seo-underline mx-auto" /> */}

          <div className="row align-items-center my-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <Image
                src={seoImg}
                alt="SEO"
                className="img-fluid rounded w-75"
              />
            </div>
            <div className="col-lg-6">
              <h4 className="fw-bold text-black w-75 fs-3 mb-4">
                Why PPC
                <br />{" "}
                <span style={{ color: "#124bdb" }}>Advertising Matters</span>
              </h4>
              <p className="text-light text-black w-75">
                Unlike organic marketing, PPC campaigns bring immediate
                visibility. With the right targeting and budget, your business
                can appear in front of the right audience at the right
                time—leading to higher chances of conversion. With billions of
                daily searches and social media users, Google Ads and Meta Ads
                are two of the most powerful platforms to scale your business
                fast. Whether you want to increase website traffic, generate
                leads, or boost sales, our PPC experts create data-driven
                campaigns that deliver measurable results and maximize your
                return on investment (ROI).
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
                  Our PPC Advertising Services
                </h3>
                <p className="text-light text-black">
                  A website is more than just an online presence—it’s your
                  digital storefront. A professionally designed and optimized
                  website.
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
              <h2 className="text-pink fw-bold mb-2 text-center fs-3 pb-2">
                Drive Growth with Smarter PPC Campaigns
              </h2>
              <p className="text-uppercase text-black mb-3 text-center w-75">
                we go beyond clicks—we focus on conversions and revenue growth.
                Whether you’re a small business looking for local customers or a
                brand aiming for global reach, our PPC Advertising services on
                Google Ads and Meta Ads ensure your business gets the attention
                it deserves.
              </p>
              {/* <div className="seo-underline mx-auto mb-4"></div> */}
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
    </>
    // </div>
  );
}
