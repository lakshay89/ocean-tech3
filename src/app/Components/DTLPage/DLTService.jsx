"use client";
import React, { useState } from "react";
// import axios from "axios"; // keep if you plan to send data to backend
import "./dltservice.css";

import Pic1 from "@/app/Images/DLT1.png";
import Pic2 from "@/app/Images/DLT2.png";

import Image from "next/image";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import InquiaryForm from "../InquiaryForm/InquiaryForm";

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

                    DLT ensures transparency, security, and compliance in digital messaging by verifying sender identity, reducing fraud, and enabling trusted communication across SMS, voice, and bulk services.

                  </p>
                  <button className="btn themebackground px-4">Contact Us</button>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="col-md-6 d-flex justify-content-center">
              <div className="w-75 w-100 d-sm-none d-md-block">
                <div className="dlt-right-title text-center mb-4">
                  <h1 className="uppercase fontweight spanbold">Get a Quote</h1>
                  {/* <p className="text-muted">
                    Fill in your details and well get back to you with the best
                    pricing and solution for your needs.
                  </p> */}
                </div>

                    <InquiaryForm/>

                {/* <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
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
                </form> */}
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
              <div className="dlt-section-title text-center mb-sm-5">
                <h2 className="mt-5 text-left ">
                  What is DLT  <span className="titlebold">( DISTRIBUTED LEDGER TECHNOLOGY ) </span>and How It Works
                </h2>
              </div>
              <p className="dlt-para">
                "DLT, or Distributed Ledger Technology, is a broad term that refers to technologies such as blockchain, which use decentralized networks to record and handle data. However, when discussing DLT in the context of SMS (Short Message Service), it generally refers to the regulatory setup and technology that help manage and protect SMS traffic.

                In certain areas, especially in India, DLT is used to ensure that SMS communications follow regulations and avoid spam and fraudulent activities.
                This system requires companies to register their SMS message templates and sender details with a DLT platform. This process allows for the monitoring of SMS traffic and ensures that messages are genuine and meet the standards set by regulatory bodies.

                To sum up, DLT for SMS involves using both technology and rules to control and secure SMS communications, ensuring they are real and meet legal standards."

              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Section 3 */}
      <div className="container">
        <div className="row">
         
          <div className="col-md-6 ">
          <h1>	Why is DLT Registration Important?</h1>
            <div>
           <p className="mb-3">   "DLT registration is a necessary step for businesses that send SMS and voice messages in India, as required by TRAI regulations. <br />
           </p>
              <b className="">Heres why it is significant:</b> <br />

             <b className="spanbold"> Prevents Spam and Fraud </b><br />
             <p> Only verified businesses can send messages, reducing spam and safeguarding customers from fraudulent activities.</p> <br />

             <b className="spanbold"> Improves Transparency</b><br />
            <p>  All communications are recorded on a secure blockchain, ensuring complete transparency in message delivery.</p> <br />

             <b className="spanbold"> Ensures Regulatory Compliance</b><br />
            <p>  Businesses must follow TRAIs rules to avoid legal issues and financial penalties.</p> <br />

             <b className="spanbold"> Builds Customer Trust</b><br />
          <p>    Verified registration enhances brand credibility, fostering stronger trust and better engagement with customers."
          </p>

            </div>
          </div>
          <div className="col-md-6">
            <Image src={Pic2} alt="DLT Email Services" className="dlt-img" />
          </div>
        </div>
      </div>

      <BrandCarousel />
    </>
  );
}
