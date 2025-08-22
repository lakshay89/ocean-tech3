"use client";
import React, { useState } from "react";
// import axios from "axios"; // keep if you plan to send data to backend
import "./otp-service.css";
import InquiaryForm from "../InquiaryForm/InquiaryForm";

export default function SMSTransection() {
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
    <div className="SMS-Transection-MainSec py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="SMStitle mb-3">
              <h1 className="fw-bold w-75">
	                <span className="titlebold"> OTP SMS Service</span> Instant & Secure One-Time Password Delivery									
              </h1>
            </div>
            <div className="SMS-Content">
              <p className="text-muted mb-4 w-75">
              Ensure fast, reliable, and secure OTP delivery to authenticate users, prevent fraud, and enhance account security with our high-performance SMS gateway.
              </p>
              <button className="btn text-light px-3">Schedule Demo</button>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-6 d-flex justify-content-center">
           <div className="w-75">
           <div className="RightSidetitle text-center mb-4">
              <h1 className="uppercase fontweight spanbold">Get a Quote</h1>
              {/* <p className="text-muted">
                Fill in your details and we ll get back to you with the best
                pricing and solution for your needs.
              </p> */}
            </div>
                 <InquiaryForm/>

            {/* <form onSubmit={handleSubmit} className="p-4 shadow formSec rounded bg-light">
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

              <button className="btn text-light btnBackground w-100" type="submit">
                Submit Query
              </button>
            </form> */}
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}
