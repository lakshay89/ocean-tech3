"use client";
import React, { useState } from "react";
// import axios from "axios"; // keep if you plan to send data to backend
import "./dltservice.css";

import Pic1 from "@/app/Images/DLT1.png";
import Pic2 from "@/app/Images/Bulk Email Marketing Page/Our Email Marketing Services and What We Offer.png";
import Image from "next/image";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

export default function SMSWhatsApp() {
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
      <div className="dlt-main py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Section */}
            <div className="col-md-6 mb-4 mb-md-0">
            <div className="LeftFormSec">
            <div className="dlt-title mb-3">
                <h1 className="fw-bold">
                 <span className="titlebold"> DISTRIBUTED LEDGER TECHNOLOGY </span> for Secure Digital Communication
                </h1>
              </div>
              <div className="dlt-content">
                <p className="mb-4">
                  "DLT, or Distributed Ledger Technology, is a broad term that
                  refers to technologies such as blockchain, which use
                  decentralized networks to record and handle data. However,
                  when discussing DLT in the context of SMS (Short Message
                  Service), it generally refers to the regulatory setup and
                  technology that help manage and protect SMS traffic. In
                  certain areas, especially in India, DLT is used to ensure that
                  SMS communications follow regulations and avoid spam and
                  fraudulent activities. This system requires companies to
                  register their SMS message templates and sender details with a
                  DLT platform. This process allows for the monitoring of SMS
                  traffic and ensures that messages are genuine and meet the
                  standards set by regulatory bodies. To sum up, DLT for SMS
                  involves using both technology and rules to control and secure
                  SMS communications, ensuring they are real and meet legal
                  standards."
                </p>
                <button className="btn themebackground px-4">Schedule Demo</button>
              </div>
            </div>
            </div>

            {/* Right Section */}
            <div className="col-md-6 d-flex justify-content-center">
            <div className="w-75">
            <div className="dlt-right-title text-center mb-4">
                <h1 className="fw-semibold">Get a Quote</h1>
                <p className="text-muted">
                  Fill in your details and well get back to you with the best
                  pricing and solution for your needs.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
                <div className="form-group mb-3">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button className="btn themebackground w-100" type="submit">
                  Submit Query
                </button>
              </form>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="container">
        <div className="row">
        <div className="col-md-6">
            <Image src={Pic1} alt="DLT Illustration" className="dlt-img" />
          </div>
          <div className="col-md-6 dlt-textcol">
            <div>
              <div className="dlt-section-title text-center">
                <h2 className="mt-5">
                  What is DLT  <span className="titlebold">( DISTRIBUTED LEDGER TECHNOLOGY ) </span>and How It Works
                </h2>
              </div>
              <p className="dlt-para">
                "DLT, or Distributed Ledger Technology, is a broad term that
                refers to technologies such as blockchain, which use
                decentralized networks to record and handle data. However, when
                discussing DLT in the context of SMS (Short Message Service), it
                generally refers to the regulatory setup and technology that
                help manage and protect SMS traffic. In certain areas, especially
                in India, DLT is used to ensure that SMS communications follow
                regulations and avoid spam and fraudulent activities. This
                system requires companies to register their SMS message
                templates and sender details with a DLT platform. This process
                allows for the monitoring of SMS traffic and ensures that
                messages are genuine and meet the standards set by regulatory
                bodies. To sum up, DLT for SMS involves using both technology
                and rules to control and secure SMS communications, ensuring
                they are real and meet legal standards."
              </p>
            </div>
          </div>
        
        </div>
      </div>

      {/* Section 3 */}
      {/* <div className="container">
        <div className="row">
          <h1>"Our Email Marketing Services and What We Offer"</h1>
          <div className="col-md-6">
            <Image src={Pic2} alt="DLT Email Services" className="dlt-img" />
          </div>
          <div className="col-md-6 dlt-textcol">
            <div>
              <p>
                <b>Manage subscriber base</b> <br />Track subscribers activity,
                get relevant stats, segment audience, & manage your subscribers
                at one place.
              </p>

              <p>
                <b>Customized DLTs </b> <br /> Set up customized email campaigns
                for your audience based on the user persona and get the email
                notified.
              </p>

              <p>
                <b>Autoresponder</b> <br />
                Immediately engage with your new subscribers / leads with an
                autoresponder feature.
              </p>

              <p>
                <b>Analytics and data</b> <br />
                Check your campaigns open rate, bounce rate, and engagement
                levels with analytics reporting.
              </p>

              <p>
                <b>Email newsletter</b> <br />Select a template, craft your
                message, and send compelling email newsletters with ease.
              </p>

              <p>
                <b>Spam reporting</b> <br />We keep the spammers out. Get a list
                of users who report your DLTs under spam through FBL.
              </p>

              <p>
                <b>Predefined templates</b> <br />Give a professional touch to
                your DLTs with predefined templates and designs.
              </p>

              <p>
                <b>100% Deliverability</b> <br />
                Launch email campaigns with 100% deliverability. Authenticate
                DLTs using SPF and domain keys.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <BrandCarousel />
    </>
  );
}
