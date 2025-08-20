"use client"
import React, { useState } from "react";
import "./aboutus.css";
import { FaSms, FaWhatsapp, FaPhoneVolume, FaHandshake, FaCogs } from "react-icons/fa";
import { RiVoiceprintLine } from "react-icons/ri";
import Image from "next/image";
import pic1 from "@/app/Images/girl.png"; // replace with your actual image

export default function AboutUs() {
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
    <section className="why-choose-us py-5">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Content */}
          <div className="col-lg-7">
            <h2 className="section-title text-center">Why Choose Us</h2>
            <p className="section-subtitle text-center">
              Ocean Tech Zone, established in 2017, is a leading provider of advanced business
              communication solutions designed to help you grow, connect, and thrive.
            </p>

            <div className="row mt-4">
              {/* 1. Bulk SMS & WhatsApp */}
              <div className="col-md-6 Details d-flex mb-4">
                <div className="icon-box">
                  <FaSms size={26} />
                </div>
                <div>
                  <h6 className="fw-bold">Bulk SMS & WhatsApp Messaging</h6>
                  <p>Reach your audience instantly with Bulk SMS and WhatsApp Business Messaging.</p>
                </div>
              </div>

              {/* 2. Voice Call & IVR */}
              <div className="col-md-6 Details d-flex mb-4">
                <div className="icon-box">
                  <RiVoiceprintLine size={26} />
                </div>
                <div>
                  <h6 className="fw-bold">Voice Call & IVR Systems</h6>
                  <p>Deliver smooth and professional customer interactions 24/7 with our call solutions.</p>
                </div>
              </div>

              {/* 3. Reliability & Cost-Efficiency */}
              <div className="col-md-6 Details d-flex mb-4">
                <div className="icon-box">
                  <FaHandshake size={26} />
                </div>
                <div>
                  <h6 className="fw-bold">Reliability & Cost-Efficiency</h6>
                  <p>Our services are built for maximum performance at the most competitive rates.</p>
                </div>
              </div>

              {/* 4. Customized Business Solutions */}
              <div className="col-md-6 Details d-flex mb-4">
                <div className="icon-box">
                  <FaCogs size={26} />
                </div>
                <div>
                  <h6 className="fw-bold">Customized Solutions</h6>
                  <p>Tailored communication tools to meet your specific business requirements.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-5 position-relative text-center">
            {/* <div className="dots-pattern"></div>
            <Image src={pic1} alt="Office Workspace" className="feature-image" /> */}
              <div className="RightSidetitle text-center mb-4">
                                <h3 className="fw-semibold">Get a Quote</h3>
                                <p className="text-muted">
                                    Fill in your details and we ll get back to you with the best
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
    </section>
  );
}
