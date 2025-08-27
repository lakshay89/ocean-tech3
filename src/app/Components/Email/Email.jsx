"use client";
import React, { useState } from "react";
// import axios from "axios"; // keep if you plan to send data to backend
import "./Email.css";

// import InquiaryForm from "../InquiaryForm/InquiaryForm";
import Link from "next/link";
import Image from "next/image";
import img1 from "../../Images/current/e33.png";
import seoImg from "../../Images/current/e2-removebg-preview.png";

const seoFeatures = [
  {
    img: "/gif/seo1.gif",
    title: "Bulk WhatsApp Campaign",
    desc: "Reach thousands of users instantly with promotional or transactional messages, including images, videos, and links.",
  },
  {
    img: "/gif/smo2.gif",
    title: "Automated Email Campaign",
    desc: "From welcome emails to drip campaigns, we create personalized email sequences that nurture leads and boost conversions.",
  },
  {
    img: "/gif/seo3.gif",
    title: "Newsletter Creation & Management",
    desc: "Engage your audience with beautifully designed newsletters that share updates, offers, and insights.",
  },
  {
    img: "/gif/smo4.gif",
    title: "Lead Nurturing via Email & WhatsApp",
    desc: "Build trust with prospects by sending targeted, timely messages that guide them towards making a purchase.",
  },
  {
    img: "/gif/smo5.gif",
    title: "Promotional Campaigns",
    desc: "Promote products, services, or events directly to your audience with measurable results and high response rates.",
  },
  {
    img: "/gif/smo6.gif",
    title: "Reporting & Analytics",
    desc: "We track open rates, click-throughs, conversions, and customer interactions to refine campaigns for maximum ROI.",
  },
];
export default function Email() {
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
                    Email & WhatsApp Marketing{" "}
                  </span>{" "}
                  Reach thousands of users instantly
                </h1>
              </div>
              <div className="SMS-Content">
                <p className="text-muted mb-4">
                  we help businesses connect with their customers directly
                  through Email & WhatsApp Marketing—two of the most powerful
                  and cost-effective channels for driving engagement, building
                  trust, and increasing sales.{" "}
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
                Email & WhatsApp
                <br />{" "}
                <span style={{ color: "#124bdb" }}>Marketing Services</span>
              </h4>
              <p className="text-light text-black w-75">
                we help businesses connect with their customers directly through
                Email & WhatsApp Marketing—two of the most powerful and
                cost-effective channels for driving engagement, building trust,
                and increasing sales. Whether you want to send personalized
                offers, important updates, or promotional campaigns, we make
                sure your message reaches the right audience at the right
                time.With our Email & WhatsApp Marketing solutions, you can
                strengthen customer relationships, improve brand loyalty, and
                generate consistent sales—all while keeping your communication
                fast, efficient, and personalized.{" "}
              </p>
            </div>
          </div>
        </div>

            <div className="container-fluid bg-light py-5">
            <div className="container">


          <div className="row">
             <div className="mb-5">
            <h3 className="text-pink fw-bold mb-2" style={{ color: "#124bdb" }}>
              Our Email & WhatsApp Marketing Services
            </h3>
            <p className="text-light text-black">
              driving engagement, building trust, and increasing sales. Whether
              you want to send personalized offers, important updates, or
              promotional campaigns, we make sure your message reaches the right
              audience at the right time.
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
                Grow Your Business with Smarter Messaging
              </h2>
              <p className="text-uppercase text-black mb-3 text-center w-75 ">
                With Email & WhatsApp Marketing, your brand can connect with
                customers on a personal level, delivering the right message at
                the right moment. we ensure your campaigns are engaging,
                effective, and built to drive growth.
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
