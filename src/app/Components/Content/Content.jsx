"use client";
import React, { useState } from "react";
// import axios from "axios"; // keep if you plan to send data to backend
import "./Content.css";

// import InquiaryForm from "../InquiaryForm/InquiaryForm";
import Link from "next/link";
import Image from "next/image";
import img1 from "../../Images/current/cc.png";
import seoImg from "../../Images/current/css.png";

const seoFeatures = [
  {
    img: "/gif/seo1.gif",
    title: "Content Strategy & Planning",
    desc: "We design a customized content plan aligned with your brand voice, business goals, and target audience to ensure maximum impact.",
  },
  {
    img: "/gif/smo2.gif",
    title: "Blog Writing & SEO Articles",
    desc: "Our team creates SEO-optimized blog posts and articles that improve rankings, boost traffic, and establish your authority in your industry.",
  },
  {
    img: "/gif/seo3.gif",
    title: "Website Content Creation",
    desc: "Engaging, persuasive, and keyword-focused website copywriting that reflects your brand identity and improves conversions.",
  },
  {
    img: "/gif/smo4.gif",
    title: "Social Media Content",
    desc: "From creative captions to engaging graphics, we develop content tailored for platforms like Facebook, Instagram, LinkedIn, and Twitter (X).",
  },
  {
    img: "/gif/smo5.gif",
    title: "Video Scripts & Visual Content",
    desc: " We craft scripts, storyboards, and visual content ideas that make your brand stand out on YouTube, Instagram Reels, and TikTok.",
  },
  {
    img: "/gif/smo6.gif",
    title: "Email Marketing Content",
    desc: "Compelling newsletters and campaigns that drive customer engagement and repeat sales.",
  },
  {
    img: "/gif/smo1.gif",
    title: "E-books, Whitepapers & Case Studies",
    desc: "Long-form, in-depth content that positions your brand as a thought leader in your industry",
  },
  {
    img: "/gif/seo2.gif",
    title: "Content Distribution & Promotion",
    desc: "We don’t just create content—we make sure it reaches the right audience through SEO, social sharing, and targeted promotions.",
  },
];
export default function Content() {
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
                    Our Content Marketing services{" "}
                  </span>
                  are designed to help your business build authority.
                </h1>
              </div>
              <div className="SMS-Content">
                <p className="text-muted mb-4">
                  From creative captions to engaging graphics, we develop
                  content tailored for platforms like Facebook, Instagram,
                  LinkedIn, and Twitter (X).
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
                className="img-fluid rounded w-100"
              />
            </div>
            <div className="col-lg-6">
              <h4 className="fw-bold text-black w-75 fs-3 mb-4">
                Why Content
                <span style={{ color: "#124bdb" }}> Marketing Matters </span>
              </h4>
              <p className="text-light text-black w-75">
                In today’s digital-first world, customers trust brands that
                educate, inspire, and connect with them. Content marketing is
                not just about words—it’s about creating meaningful experiences.
                By producing high-quality content, Improve search engine
                rankings Build brand credibility and trust Generate organic
                traffic and quality leads Nurture relationships with your target
                audience Drive long-term business growth.Our Content Marketing
                services are designed to help your business build authority,
                attract the right audience, and convert visitors into loyal
                customers through valuable, engaging, and SEO-friendly content
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
                Our Content Marketing Services
              </h3>
              <p className="text-light text-black">
                build authority, attract the right audience, and convert
                visitors into loyal customers through valuable, engaging, and
                SEO-friendly content
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
                Get Your Content Marketing Started Today
              </h2>
              <p className="text-uppercase text-black mb-3 text-center w-75">
                we don’t just write content—we create stories that connect with
                people and deliver measurable results. Whether you need blogs,
                social posts, or complete content strategies, our Content
                Marketing services ensure your brand always has a powerful voice
                online.
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
